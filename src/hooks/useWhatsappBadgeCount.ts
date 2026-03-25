import { useState, useEffect, useCallback, useMemo } from "react";
import { 
  WhatsappWidgetApiAdapter, SocketAdapter, Message, SocketPayload, IncomingCommunication 
} from "../types/whatsapp";
import { useWhatsappIncomingStore } from "../context/WhatsappChatContext";

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
  isChatOpen?: boolean
) {
  const incomingData = useWhatsappIncomingStore(s => s.incomingData);
  const setIncomingData = useWhatsappIncomingStore(s => s.setIncomingData);
  const handleIncomingMessage = useWhatsappIncomingStore(s => s.handleIncomingMessage);
  const clearContact = useWhatsappIncomingStore(s => s.clearContact);

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
        const data = await apiAdapter.getIncomingCommunications(""); 
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
    } else {
      fetchCount();
    }
  }, [isChatOpen, phone, referenceName, clearContact, fetchCount]);

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

  // Subscribe to real-time socket messages (Adapter Mode)
  useEffect(() => {
    if (!socketAdapter?.onMessage) return;

    const handleSocket = async (msg: Message) => {
      if (msg.is_outbound === 0) {
        // Optimistically update the store list
        handleIncomingMessage(msg);

        // Notify user if chat is closed
        if (!isChatOpen && msg.name && !notifiedMessageIds.has(msg.name)) {
          notifiedMessageIds.add(msg.name);
          if (apiAdapter.showNotification) {
            const senderInfo = msg.sender || msg.from_name || "Customer";
            let preview = "";
            if ((msg.message || "").trim()) {
              preview = `: ${msg.message}`;
            } else if (msg.content_type) {
              preview = `: Sent a ${msg.content_type}`;
            } else if (msg.attach) {
              preview = ": Sent an attachment";
            } else {
              preview = " (New message)";
            }
            apiAdapter.showNotification("WhatsApp", `${senderInfo}${preview}`);
          }
        }
      } else {
        // For outbound, we can just clear the specific contact count since we replied
        // or trigger a full refresh to be safe.
        fetchCount();
      }
    };

    socketAdapter.onMessage(handleSocket);
    return () => socketAdapter.offMessage?.(handleSocket);
  }, [socketAdapter, apiAdapter, fetchCount, handleIncomingMessage]);

  // Subscribe to raw socket payload (Pass-through Mode)
  useEffect(() => {
    if (!socketPayload || socketPayload.event !== "whatsapp_message") return;
    const msg = socketPayload.message;
    if (msg) {
      handleIncomingMessage(msg);
      // Notify user if chat is closed
      if (!isChatOpen && msg.name && !notifiedMessageIds.has(msg.name)) {
        notifiedMessageIds.add(msg.name);
        if (apiAdapter.showNotification) {
          const senderInfo = (msg.from_name || msg.profile_name || phone || "Customer").trim();
          let preview = "";
          if ((msg.message || "").trim()) {
            preview = `: ${msg.message}`;
          } else if (msg.content_type || msg.type) {
            // In raw payload, type/content_type might hold media info
            const mediaType = msg.content_type || msg.type || "file";
            preview = `: Sent a ${mediaType}`;
          } else if (msg.attach) {
            preview = ": Sent an attachment";
          } else {
            preview = " (New message)";
          }
          apiAdapter.showNotification("WhatsApp", `${senderInfo}${preview}`);
        }
      }
    } else {
      fetchCount();
    }
  }, [socketPayload, fetchCount, handleIncomingMessage, isChatOpen, apiAdapter, phone]);

  return unreadCount;
}
