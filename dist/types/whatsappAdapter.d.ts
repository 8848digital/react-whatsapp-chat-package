import { Message, WhatsAppTemplateResponse } from './whatsapp';
export interface TemplateListReference {
    reference_doctype: string;
    reference_name: string;
}
export interface SendWhatsAppMessagePayloadAdapter {
    reference_doctype?: string;
    reference_name?: string;
    message: string;
    to: string;
    attach?: string;
    content_type?: string;
    reply_to?: string;
    links?: Array<{
        link_doctype: string;
        link_name: string;
    }>;
}
export interface SendTemplatePayloadAdapter {
    reference_doctype: string;
    reference_name: string;
    to: string;
    template: string;
    links?: Array<{
        link_doctype: string;
        link_name: string;
    }>;
}
export interface SocketAdapter {
    isConnected: boolean;
    onMessage?: (callback: (message: Message) => void) => void;
    offMessage?: (callback: (message: Message) => void) => void;
    emitMarkRead?: (messageId: string) => void;
}
export interface WhatsappWidgetApiAdapter {
    getMessages?: (doctype: string, name: string) => Promise<Message[]>;
    getTemplates?: (refs: Array<{
        reference_doctype: string;
        reference_name: string;
    }>) => Promise<WhatsAppTemplateResponse[]>;
    sendMessage: (payload: SendWhatsAppMessagePayloadAdapter) => Promise<{
        name?: string;
    }>;
    sendTemplate: (payload: SendTemplatePayloadAdapter) => Promise<unknown>;
    uploadFile?: (file: File) => Promise<{
        file_url: string;
    }>;
    sendReadReceipt?: (messageName: string) => Promise<void>;
    getUnreadCount?: () => Promise<number>;
    onMessageSent?: () => void;
    showNotification?: (title: string, body: string) => void;
}
export interface WhatsappWidgetConfig {
    currentUser: string;
    activeLeadName?: string;
    activeLeadDoctype?: string;
    doctype: string;
    refName: string;
    phone: string;
    apiBaseUrl?: string;
    isChatOpen?: boolean;
    links?: Array<{
        link_doctype: string;
        link_name: string;
    }>;
}
