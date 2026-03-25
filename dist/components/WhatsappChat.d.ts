import { WhatsappWidgetApiAdapter, WhatsappWidgetConfig, SocketAdapter, SocketPayload, WhatsappChatLink } from '../types/whatsapp';
export declare const WhatsappChatWidget: () => import("react/jsx-runtime").JSX.Element;
export interface WhatsappChatComponentProps {
    apiAdapter?: WhatsappWidgetApiAdapter;
    config?: WhatsappWidgetConfig;
    socketAdapter?: SocketAdapter;
    baseURL?: string;
    token?: string;
    /** Raw socket.io message payload from host app (e.g. { event: "whatsapp_message", message: { ... } }) */
    socketPayload?: SocketPayload;
    /** Manual override for socket connection status (useful in pass-through mode) */
    socketConnected?: boolean;
    currentUserEmail?: string;
    phone?: string;
    refDoctype?: string;
    refName?: string | null;
    links?: WhatsappChatLink[];
    /** Optional notification overrides */
    showNotification?: (title: string, message: string) => void;
    showWarning?: (title: string, message: string) => void;
    showError?: (title: string, message: string) => void;
}
export declare const WhatsappChat: ({ apiAdapter: externalApiAdapter, config: externalConfig, socketAdapter: externalSocketAdapter, socketPayload, socketConnected, baseURL, token, currentUserEmail, phone, refDoctype, refName, links, showNotification, showWarning, showError, }: WhatsappChatComponentProps) => import("react/jsx-runtime").JSX.Element | null;
export default WhatsappChat;
