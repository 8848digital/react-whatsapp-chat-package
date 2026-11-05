import { WhatsappWidgetApiAdapter } from '../types/whatsapp';
interface NotificationHandlers {
    showNotification?: (title: string, message: string) => void;
    showWarning?: (title: string, message: string) => void;
    showError?: (title: string, message: string) => void;
}
/**
 * Wraps an ApiAdapter with local notification handlers if provided.
 * This ensures that API calls made by the widget use the host application's
 * notification system (e.g., Toast, Noty) for success/error feedback.
 */
export declare const wrapApiAdapter: (baseAdapter: WhatsappWidgetApiAdapter | null | undefined, handlers: NotificationHandlers) => WhatsappWidgetApiAdapter | null;
export {};
