import { useEffect, useCallback, useMemo, useRef } from "react";
import {
  WhatsappWidgetApiAdapter, SocketAdapter, Message, SocketPayload, IncomingCommunication
} from "../types/whatsapp";
import { useWhatsappIncomingStore } from "../context/WhatsappChatContext";
import { transformToMessage } from "../utils/whatsapp";

const notifiedMessageIds = new Set<string>();

/**
 * Hook to manage unread message badge count within the widget package.
 */
export function useWhatsappBadgeCount(
  apiAdapter: WhatsappWidgetApiAdapter,
  socketAdapter?: SocketAdapter,
  socketPayload?: SocketPayload,
  phone?: string,
  referenceName?: string,
  isChatOpen?: boolean,
  userEmail?: string
) {
  const incomingData = useWhatsappIncomingStore(s => s.incomingData);
  const setIncomingData = useWhatsappIncomingStore(s => s.setIncomingData);
  const handleIncomingMessage = useWhatsappIncomingStore(s => s.handleIncomingMessage);
  const clearContact = useWhatsappIncomingStore(s => s.clearContact);
  const lastSocketPayloadKeyRef = useRef<string | null>(null);

  // Derived count based on global incomingData state
  const unreadCount = useMemo(() => {
    if (!phone && !referenceName) {
      return incomingData
        .filter((c: IncomingCommunication) => c.type === "whatsapp")
        .reduce((sum: number, c: IncomingCommunication) => sum + (c.counts || 0), 0);
    }
    const current = incomingData.find(
      (c: IncomingCommunication) =>
        c.type === "whatsapp" &&
        ((phone && c.from === phone) || (referenceName && c.customer === referenceName))
    );
    return current?.counts ?? 0;
  }, [incomingData, phone, referenceName]);

  // Sync with API
  const fetchCount = useCallback(async () => {
    // If the adapter supports bulk fetch, use it to sync the global store
    if (apiAdapter.getIncomingCommunications) {
      try {
        const data = await apiAdapter.getIncomingCommunications(userEmail || "");
        setIncomingData(data);
      } catch (e) {
        console.error("Failed to fetch incoming communications:", e);
      }
    } else {
      // Fallback: If only single-contact count available, we just call it (though we can't update store easily)
      try {
        await apiAdapter.getUnreadCount(phone || "", referenceName || "");
      } catch (e) {
        console.error("Failed to fetch unread count:", e);
      }
    }
  }, [apiAdapter, phone, referenceName, setIncomingData]);

  // Initial fetch and refresh on mount or dependency changes
  useEffect(() => {
    fetchCount();
  }, [fetchCount]);

  // When chat opens or closes, we might want to refresh the global state 
  // to ensure accuracy after read receipts are sent.
  useEffect(() => {
    if (isChatOpen) {
      clearContact(phone, referenceName);
    }
  }, [isChatOpen, phone, referenceName, clearContact]);

  // Handle onMessageSent refresh (Manually hook into the adapter)
  useEffect(() => {
    if (!apiAdapter) return;

    const originalOnMessageSent = apiAdapter.onMessageSent;
    apiAdapter.onMessageSent = () => {
      fetchCount();
      if (originalOnMessageSent) originalOnMessageSent();
    };

    return () => {
      // Restore original if we are unmounting
      if (apiAdapter.onMessageSent) {
        apiAdapter.onMessageSent = originalOnMessageSent;
      }
    };
  }, [apiAdapter, fetchCount]);

  // Subscribe to real-time socket messages (Unified Listener)
  useEffect(() => {
    const onNewMessage = (msg: Message | null) => {
      if (!msg || msg.name === undefined) return;

      // 1. Only process *new incoming* messages for badge/notification.
      // Ignore status-only updates (Delivered/Read/etc.) to avoid repeated notifications / count churn.
      const isStatusUpdate = msg.status !== null && msg.status !== undefined;
      if (msg.is_outbound === 0 && !isStatusUpdate) {
        // Optimistically update the store list
        handleIncomingMessage(msg);

        // Notify user if:
        // - Chat is closed
        // - Message is NEW (not already notified)
        if (!isChatOpen && !notifiedMessageIds.has(msg.name)) {
          notifiedMessageIds.add(msg.name);
          if (apiAdapter.showNotification) {
            const senderInfo = msg.sender || msg.from_name || "Customer";
            apiAdapter.showNotification("WhatsApp", `New message received from ${senderInfo}`);
          }
        }
      } else {
        // Outbound messages: no-op for badge. We rely on onMessageSent() to refresh once.
      }
    };

    // Case A: Structured Adapter Mode (Preferred)
    if (socketAdapter?.onMessage) {
      const handler = (msg: Message) => onNewMessage(msg);
      socketAdapter.onMessage(handler);
      return () => socketAdapter.offMessage?.(handler);
    }

    // Case B: Raw Pass-through Mode (Fallback)
    if (socketPayload && socketPayload.event === "whatsapp_message") {
      const rawMsg = socketPayload.message;
      const rawKey = String(rawMsg?.name ?? rawMsg?.message_id ?? "");
      // Prevent re-processing the last payload (e.g. opening modal re-runs effect with same socketPayload)
      if (rawKey && lastSocketPayloadKeyRef.current === rawKey) {
        return undefined;
      }
      if (rawKey) lastSocketPayloadKeyRef.current = rawKey;
      const msg = transformToMessage(rawMsg);
      onNewMessage(msg);
    }

    return undefined;
  }, [socketAdapter, socketPayload, apiAdapter, handleIncomingMessage, isChatOpen]);

  return unreadCount;
}
