import { default as React } from 'react';
import { StoreApi } from 'zustand';
import { Message, WhatsappWidgetApiAdapter, WhatsappWidgetConfig, SocketAdapter, SocketPayload, IncomingCommunication } from '../types/whatsapp';
export interface WhatsappIncomingState {
    incomingData: IncomingCommunication[];
    setIncomingData: (data: IncomingCommunication[]) => void;
    /** Silently updates the count for a contact when a new socket message arrives */
    handleIncomingMessage: (msg: Message) => void;
    /** Optimistically clears or reduces count for a contact when read */
    clearContact: (phone?: string, referenceName?: string) => void;
}
export declare const useWhatsappIncomingStore: import('zustand').UseBoundStore<StoreApi<WhatsappIncomingState>>;
export interface WhatsappWidgetState {
    messages: Message[];
    isLoading: boolean;
    error: string | null;
}
export interface WhatsappWidgetActions {
    setMessages: (messages: Message[]) => void;
    appendMessage: (message: Message) => void;
    updateMessageStatus: (name: string, status: number) => void;
    replaceMessage: (oldName: string, newMessage: Message) => void;
    clearMessages: () => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
}
export type WhatsappWidgetStore = WhatsappWidgetState & WhatsappWidgetActions;
export declare const createWhatsappWidgetStore: () => StoreApi<WhatsappWidgetStore>;
interface WhatsappChatContextProps {
    apiAdapter: WhatsappWidgetApiAdapter;
    config: WhatsappWidgetConfig;
    socketAdapter?: SocketAdapter;
    socketPayload?: SocketPayload;
}
export declare const WhatsappChatProvider: ({ apiAdapter, config, socketAdapter, socketPayload, children, }: WhatsappChatContextProps & {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useWhatsappChatConfig: () => WhatsappChatContextProps;
export declare const useWhatsappWidgetStore: () => StoreApi<WhatsappWidgetStore>;
export declare const useWhatsappWidgetZustand: <T>(selector: (state: WhatsappWidgetStore) => T) => T;
export {};
