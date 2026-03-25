import { WhatsappWidgetApiAdapter } from '../types/whatsapp';
/**
 * Creates a default Frappe-compatible API adapter for the WhatsApp widget.
 * If baseURL is not provided, returns null (Advanced Mode).
 */
export declare const useDefaultWhatsappAdapter: (baseURL?: string, token?: string, userEmail?: string) => WhatsappWidgetApiAdapter | null;
