import { WhatsappWidgetApiAdapter, WhatsappWidgetConfig, SocketAdapter, WhatsappChatLink } from '../types/whatsapp';
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
    config: WhatsappWidgetConfig;
    finalSocketAdapter: SocketAdapter | undefined;
};
