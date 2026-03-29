import { GetWhatsAppMessagesPayload, GetWhatsAppMessagesResponse, FrappeMethodResponse, SendWhatsAppMessagePayload, TemplateListReference, GetTemplatesListResponse, SendWhatsAppTemplatePayload, SendWhatsAppTemplateResponse, SendReadReceiptPayload, SendReadReceiptResponse, UploadFileResponse, GetIncomingCommunicationsResponse } from '../types/whatsapp';
/**
 * Internal API client for the WhatsApp widget.
 */
export declare const createWhatsAppClient: (baseURL: string, token?: string) => {
    getMessages: (payload: GetWhatsAppMessagesPayload) => Promise<GetWhatsAppMessagesResponse>;
    sendMessage: (payload: SendWhatsAppMessagePayload) => Promise<FrappeMethodResponse>;
    getTemplates: (references: TemplateListReference[]) => Promise<GetTemplatesListResponse>;
    sendTemplate: (payload: SendWhatsAppTemplatePayload) => Promise<SendWhatsAppTemplateResponse>;
    sendReadReceipt: (payload: SendReadReceiptPayload) => Promise<SendReadReceiptResponse>;
    uploadFile: (file: File) => Promise<UploadFileResponse>;
    uploadFiles: (files: File[]) => Promise<UploadFileResponse>;
    getIncomingCommunications: (user: string) => Promise<GetIncomingCommunicationsResponse>;
};
