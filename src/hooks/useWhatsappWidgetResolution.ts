import { useMemo } from "react";
import { useDefaultWhatsappAdapter } from "./useDefaultWhatsappAdapter";
import { wrapApiAdapter } from "../utils/adapter";
import type { 
  WhatsappWidgetApiAdapter, 
  WhatsappWidgetConfig, 
  SocketAdapter, 
  WhatsappChatLink 
} from "../types/whatsapp";

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
export const useWhatsappWidgetResolution = (params: WidgetResolutionParams) => {
  const {
    apiAdapter: externalApiAdapter,
    config: externalConfig,
    socketAdapter: externalSocketAdapter,
    baseURL,
    token,
    socketConnected,
    currentUserEmail,
    currentUserFullName,
    phone,
    refDoctype = "Contact",
    refName = "",
    links = [],
    isChatOpen,
    showNotification,
    showWarning,
    showError,
  } = params;

  // 1. Resolve API Adapter (Internal vs External)
  const internalApiAdapter = useDefaultWhatsappAdapter(baseURL, token, currentUserEmail);
  const baseApiAdapter = externalApiAdapter || internalApiAdapter;

  // 2. Wrap Adapter with local notification overrides if provided
  const apiAdapter = useMemo(
    () => wrapApiAdapter(baseApiAdapter, { showNotification, showWarning, showError }),
    [baseApiAdapter, showNotification, showWarning, showError]
  );

  // 3. Resolve Config (Internal vs External)
  const config = useMemo(() => {
    if (externalConfig) return externalConfig;
    return {
      currentUser: currentUserEmail || "",
      currentUserFullName,
      doctype: refDoctype,
      refName: refName || "",
      phone: phone || "",
      links: links,
      isChatOpen: isChatOpen,
      apiBaseUrl: baseURL,
    };
  }, [externalConfig, currentUserEmail, currentUserFullName, refDoctype, refName, phone, links, isChatOpen, baseURL]);

  // 4. Resolve Socket Adapter
  const internalSocketAdapter = useMemo(() => {
    if (socketConnected !== undefined) {
      return { isConnected: socketConnected } as SocketAdapter;
    }
    return undefined;
  }, [socketConnected]);

  const finalSocketAdapter = externalSocketAdapter || internalSocketAdapter;

  return {
    apiAdapter,
    config,
    finalSocketAdapter,
  };
};
