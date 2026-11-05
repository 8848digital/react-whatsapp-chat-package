import { WhatsappWidgetApiAdapter, WhatsappWidgetConfig, SocketAdapter, SocketPayload, WhatsappChatLink, WhatsappAttachItem } from '../types/whatsapp';
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
    currentUserFullName?: string;
    phone?: string;
    refDoctype?: string;
    refName?: string | null;
    links?: WhatsappChatLink[];
    /** Pre-seeded file paths (merged into `attach` on send); also in `config.attach` */
    attach?: WhatsappAttachItem[];
    /** Prefills composer; also in `config.preAddedMessages` */
    preAddedMessages?: string;
    /** Optional notification overrides */
    showNotification?: (title: string, message: string) => void;
    showWarning?: (title: string, message: string) => void;
    showError?: (title: string, message: string) => void;
}
export declare const WhatsappChat: ({ apiAdapter: externalApiAdapter, config: externalConfig, socketAdapter: externalSocketAdapter, socketPayload, socketConnected, baseURL, token, currentUserEmail, currentUserFullName, phone, refDoctype, refName, links, attach, preAddedMessages, showNotification, showWarning, showError, }: WhatsappChatComponentProps) => import("react/jsx-runtime").JSX.Element | null;
export default WhatsappChat;
