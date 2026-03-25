import { WhatsappWidgetApiAdapter, SocketAdapter, SocketPayload } from '../types/whatsapp';
/**
 * Hook to manage unread message badge count within the widget package.
 */
export declare function useWhatsappBadgeCount(apiAdapter: WhatsappWidgetApiAdapter, socketAdapter?: SocketAdapter, socketPayload?: SocketPayload, phone?: string, referenceName?: string, isChatOpen?: boolean): number;
