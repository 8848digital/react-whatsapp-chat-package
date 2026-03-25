import { Message, AttachedFile, WhatsAppTemplateResponse } from '../types/whatsapp';
/**
 * Core logic hook for the WhatsApp Chat Widget.
 * Orchestrates API calls, socket listeners, state management, and file handling.
 * This hook is UI-agnostic and provides all necessary data for the Chat Widget components.
 */
export declare function useWhatsappWidgetLogic(): {
    displayMessages: Message[];
    isLoading: boolean;
    messagesError: string | null;
    isConnected: boolean;
    isSending: boolean;
    isTemplateModalOpen: boolean;
    setIsTemplateModalOpen: import('react').Dispatch<import('react').SetStateAction<boolean>>;
    selectedTemplateText: string | undefined;
    selectedTemplateName: string | undefined;
    selectedTemplate: WhatsAppTemplateResponse | undefined;
    setSelectedTemplateText: import('react').Dispatch<import('react').SetStateAction<string | undefined>>;
    setSelectedTemplateName: import('react').Dispatch<import('react').SetStateAction<string | undefined>>;
    setSelectedTemplate: import('react').Dispatch<import('react').SetStateAction<WhatsAppTemplateResponse | undefined>>;
    attachedFile: AttachedFile | null;
    templates: WhatsAppTemplateResponse[];
    isLoadingTemplates: boolean;
    sendMessage: (text: string, attach?: string, contentType?: string) => Promise<void>;
    handleTemplateSelect: (preview: string, apiName: string, template: WhatsAppTemplateResponse) => void;
    handleFileSelect: (file: File) => Promise<void>;
    handleFileRemove: () => void;
    uploadFileMutation: {
        isPending: boolean;
    };
};
