import React, { createContext, useContext } from "react";
import { create, createStore, StoreApi, useStore } from "zustand";
import type { 
  Message, WhatsappWidgetApiAdapter, WhatsappWidgetConfig, 
  SocketAdapter, SocketPayload, IncomingCommunication 
} from "../types/whatsapp";

// ------------------------------------------------------------------
// 1. Shared Global Store for Incoming Communications (Badge Management)
// ------------------------------------------------------------------
export interface WhatsappIncomingState {
  incomingData: IncomingCommunication[];
  setIncomingData: (data: IncomingCommunication[]) => void;
  /** Silently updates the count for a contact when a new socket message arrives */
  handleIncomingMessage: (msg: Message) => void;
  /** Optimistically clears or reduces count for a contact when read */
  clearContact: (phone?: string, referenceName?: string) => void;
}

export const useWhatsappIncomingStore = create<WhatsappIncomingState>((set) => ({
  incomingData: [],
  setIncomingData: (data) => set({ incomingData: data }),
  handleIncomingMessage: (msg) => set((state) => {
    if (msg.is_outbound === 1) return state;

    const data = [...state.incomingData];
    const msgId = msg.name;
    const sender = msg.from || msg.sender || "";
    const refName = msg.reference_name || "";

    // Check if this specific message is already tracked in any group
    const alreadyTracked = data.some(c => c.names?.includes(msgId));
    if (alreadyTracked) return state;

    // Find matching communication group
    const index = data.findIndex(c => 
      c.type === "whatsapp" && 
      ((sender && c.from === sender) || (refName && c.customer === refName))
    );

    if (index !== -1) {
      data[index] = {
        ...data[index],
        counts: (data[index].counts || 0) + 1,
        names: [...(data[index].names || []), msgId]
      };
      return { incomingData: data };
    } else {
      // If contact not found in current unread list, we don't optimistically create 
      // a complex object here. Returning state will trigger no change, 
      // but in the hook we can still fetch if needed.
      return state;
    }
  }),
  clearContact: (phone, referenceName) => set((state) => {
    const data = state.incomingData.filter(c => {
      if (c.type !== "whatsapp") return true;
      const isMatch = (phone && c.from === phone) || (referenceName && c.customer === referenceName);
      return !isMatch;
    });
    return { incomingData: data };
  })
}));

// ------------------------------------------------------------------
// 2. Contextual Zustand Store (Replaces Global useWhatsappStore for Widget)
// ------------------------------------------------------------------
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

export const createWhatsappWidgetStore = () =>
  createStore<WhatsappWidgetStore>((set) => ({
    messages: [],
    isLoading: false,
    error: null,

    setMessages: (messages) => set({ messages }),
    appendMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
    updateMessageStatus: (name, status) =>
      set((state) => ({
        messages: state.messages.map((m) => (m.name === name ? { ...m, status } : m)),
      })),
    replaceMessage: (oldName, newMessage) =>
      set((state) => ({
        messages: state.messages.map((m) => (m.name === oldName ? newMessage : m)),
      })),
    clearMessages: () => set({ messages: [], error: null }),
    setLoading: (isLoading) => set({ isLoading }),
    setError: (error) => set({ error }),
  }));

// ------------------------------------------------------------------
// 2. Providers and Context Definitions
// ------------------------------------------------------------------
interface WhatsappChatContextProps {
  apiAdapter: WhatsappWidgetApiAdapter;
  config: WhatsappWidgetConfig;
  socketAdapter?: SocketAdapter;
  socketPayload?: SocketPayload;
}

const WhatsappChatContext = createContext<WhatsappChatContextProps | undefined>(undefined);
const WhatsappStoreContext = createContext<StoreApi<WhatsappWidgetStore> | undefined>(undefined);

export const WhatsappChatProvider = ({
  apiAdapter,
  config,
  socketAdapter,
  socketPayload,
  children,
}: WhatsappChatContextProps & { children: React.ReactNode }) => {
  const [store] = React.useState(() => createWhatsappWidgetStore());

  return (
    <WhatsappChatContext.Provider value={{ apiAdapter, config, socketAdapter, socketPayload }}>
      <WhatsappStoreContext.Provider value={store}>{children}</WhatsappStoreContext.Provider>
    </WhatsappChatContext.Provider>
  );
};

// ------------------------------------------------------------------
// 3. Hooks to consume Context
// ------------------------------------------------------------------
export const useWhatsappChatConfig = () => {
  const context = useContext(WhatsappChatContext);
  if (!context) throw new Error("Missing WhatsappChatProvider");
  return context;
};

export const useWhatsappWidgetStore = () => {
  const store = useContext(WhatsappStoreContext);
  if (!store) throw new Error("Missing WhatsappChatProvider");
  return store;
};

export const useWhatsappWidgetZustand = <T,>(selector: (state: WhatsappWidgetStore) => T): T => {
  const store = useWhatsappWidgetStore();
  return useStore(store, selector);
};
