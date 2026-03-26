import { default as React } from 'react';
import { WhatsappWidgetApiAdapter, WhatsappWidgetConfig, SocketAdapter, WhatsappChatLink, SocketPayload } from '../types/whatsapp';
interface WhatsappSendMessageTriggerProps {
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
 * Trigger component for sending a quick WhatsApp message without chat history.
 * Uses a smaller default modal size.
 */
export declare const WhatsappSendMessageTrigger: React.FC<WhatsappSendMessageTriggerProps>;
export default WhatsappSendMessageTrigger;
