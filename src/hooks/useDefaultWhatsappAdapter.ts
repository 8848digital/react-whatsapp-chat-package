import { useMemo } from "react";
import { createWhatsAppClient } from "../api/whatsappApi";
import { transformToMessage } from "../utils/whatsapp";
import type { 
  WhatsappWidgetApiAdapter, Message, TemplateListReference, SocketMessageDoc, WhatsAppMessage
} from "../types/whatsapp";

/**
 * Creates a default Frappe-compatible API adapter for the WhatsApp widget.
 * If baseURL is not provided, returns null (Advanced Mode).
 */
export const useDefaultWhatsappAdapter = (baseURL?: string, token?: string, userEmail?: string): WhatsappWidgetApiAdapter | null => {
  const client = useMemo(() => {
    if (!baseURL) return null;
    return createWhatsAppClient(baseURL, token);
  }, [baseURL, token]);

  return useMemo(() => {
    if (!client) return null;

    return {
      getMessages: async (doctype: string, name: string) => {
        const res = await client.getMessages({ reference_doctype: doctype, reference_name: name });
        const msgs = res.message || [];
        return msgs.map((m: WhatsAppMessage) => transformToMessage(m)).filter((m: Message | null): m is Message => !!m);
      },
      sendMessage: async (payload) => {
        const res = await client.sendMessage(payload);
        return { name: res?.name };
      },
      sendTemplate: async (payload) => {
        return client.sendTemplate(payload);
      },
      getTemplates: async (refs: TemplateListReference[]) => {
        const res = await client.getTemplates(refs);
        return res.message?.data || [];
      },
      uploadFile: async (file: File) => {
        const res = await client.uploadFile(file);
        const file_url = res.message?.file_url || res.file_url || "";
        return { file_url };
      },
      sendReadReceipt: async (messageName: string) => {
        await client.sendReadReceipt({ name: messageName });
      },
      getUnreadCount: async (phone: string, referenceName: string) => {
        if (!token || !userEmail) return 0; // Requires auth and user identity
        
        try {
          const res = await client.getIncomingCommunications(userEmail);
          const data = res.message?.data || [];
          
          // If no specific contact is provided, return the total unread count for WhatsApp
          if (!phone && !referenceName) {
            return data
              .filter((c: { type: string; counts?: number }) => c.type === "whatsapp")
              .reduce((sum: number, c: { counts?: number }) => sum + (c.counts || 0), 0);
          }

          // Find the unread count for the specific contact
          const currentCount = data.find(
            (c: { type: string; from?: string; customer?: string; counts?: number }) => 
            c.type === "whatsapp" && 
            ((phone && c.from === phone) || (referenceName && c.customer === referenceName))
          )?.counts ?? 0;
          
          return currentCount;
        } catch (error) {
          console.error("[WhatsApp Widget] Failed to fetch unread count:", error);
          return 0;
        }
      },
      getIncomingCommunications: async (user: string) => {
        if (!token) return [];
        const res = await client.getIncomingCommunications(user);
        return res.message?.data || [];
      },
      showNotification: (title: string, message: string) => {
        // Fallback to native Browser Notification if available
        if (typeof Notification !== 'undefined' && Notification.permission === "granted") {
          new Notification(title, { body: message });
        } else {
            console.log(`[WhatsApp Widget] ${title}: ${message}`);
        }
      }
    };
  }, [client, token, userEmail]);
};
