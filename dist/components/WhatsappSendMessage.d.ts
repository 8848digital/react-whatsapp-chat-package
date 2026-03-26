import { WhatsappWidgetApiAdapter, WhatsappWidgetConfig, SocketAdapter, SocketPayload, WhatsappChatLink } from '../types/whatsapp';
export declare const WhatsappSendMessageWidget: () => import("react/jsx-runtime").JSX.Element;
export interface WhatsappSendMessageProps {
    apiAdapter?: WhatsappWidgetApiAdapter;
    config?: WhatsappWidgetConfig;
    socketAdapter?: SocketAdapter;
    baseURL?: string;
    token?: string;
    socketPayload?: SocketPayload;
    socketConnected?: boolean;
    currentUserEmail?: string;
    currentUserFullName?: string;
    phone?: string;
    refDoctype?: string;
    refName?: string | null;
    links?: WhatsappChatLink[];
    showNotification?: (title: string, message: string) => void;
    showWarning?: (title: string, message: string) => void;
    showError?: (title: string, message: string) => void;
}
export declare const WhatsappSendMessage: ({ apiAdapter: externalApiAdapter, config: externalConfig, socketAdapter: externalSocketAdapter, socketPayload, socketConnected, baseURL, token, currentUserEmail, currentUserFullName, phone, refDoctype, refName, links, showNotification, showWarning, showError, }: WhatsappSendMessageProps) => import("react/jsx-runtime").JSX.Element | null;
export default WhatsappSendMessage;
