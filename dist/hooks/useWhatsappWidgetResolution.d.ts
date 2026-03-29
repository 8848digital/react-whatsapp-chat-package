import { WhatsappWidgetApiAdapter, WhatsappWidgetConfig, SocketAdapter, WhatsappChatLink, WhatsappAttachItem } from '../types/whatsapp';
export interface WidgetResolutionParams {
    apiAdapter?: WhatsappWidgetApiAdapter;
    config?: WhatsappWidgetConfig;
    socketAdapter?: SocketAdapter;
    baseURL?: string;
    token?: string;
    socketConnected?: boolean;
    currentUserEmail?: string;
    currentUserFullName?: string;
    phone?: string;
    refDoctype?: string;
    refName?: string | null;
    links?: WhatsappChatLink[];
    isChatOpen: boolean;
    /** Pre-seeded attachments (server file paths); merged into resolved `config.attach` */
    attach?: WhatsappAttachItem[];
    /** Prefills composer; merged into resolved `config.preAddedMessages` */
    preAddedMessages?: string;
    showNotification?: (title: string, message: string) => void;
    showWarning?: (title: string, message: string) => void;
    showError?: (title: string, message: string) => void;
}
/**
 * Shared hook to resolve API adapters, configuration, and socket adapters
 * across different widget components (Trigger, Base Chat, etc.)
 */
export declare const useWhatsappWidgetResolution: (params: WidgetResolutionParams) => {
    apiAdapter: WhatsappWidgetApiAdapter | null;
    config: {
        preAddedMessages?: string;
        attach?: WhatsappAttachItem[];
        currentUser: string;
        currentUserFullName?: string;
        activeLeadName?: string;
        activeLeadDoctype?: string;
        doctype: string;
        refName: string;
        phone: string;
        links?: WhatsappChatLink[];
        isChatOpen: boolean;
        preventHistoryFetch?: boolean;
        apiBaseUrl?: string;
    };
    finalSocketAdapter: SocketAdapter | undefined;
};
