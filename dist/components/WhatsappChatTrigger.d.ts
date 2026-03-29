import { default as React } from 'react';
import { WhatsappWidgetApiAdapter, WhatsappWidgetConfig, SocketAdapter, WhatsappChatLink, SocketPayload, WhatsappAttachItem } from '../types/whatsapp';
interface WhatsappChatTriggerProps {
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
    attach?: WhatsappAttachItem[];
    preAddedMessages?: string;
    buttonLabel?: string;
    icon?: React.ReactNode;
    btnClassName?: string;
    modalSize?: string;
    variant?: "default" | "plain";
    isOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
    showNotification?: (title: string, message: string) => void;
    showWarning?: (title: string, message: string) => void;
    showError?: (title: string, message: string) => void;
}
/**
 * All-in-One Component: Button with unread badge + Internal Modal management.
 */
export declare const WhatsappChatTrigger: React.FC<WhatsappChatTriggerProps>;
export default WhatsappChatTrigger;
