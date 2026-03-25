import type { WhatsappWidgetApiAdapter } from "../types/whatsapp";

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
export const wrapApiAdapter = (
  baseAdapter: WhatsappWidgetApiAdapter | null | undefined,
  handlers: NotificationHandlers
): WhatsappWidgetApiAdapter | null => {
  if (!baseAdapter) return null;
  const { showNotification, showWarning, showError } = handlers;
  
  if (!showNotification && !showWarning && !showError) return baseAdapter;

  return {
    ...baseAdapter,
    showNotification: showNotification || baseAdapter.showNotification,
    showWarning: showWarning || baseAdapter.showWarning,
    showError: showError || baseAdapter.showError,
  };
};
