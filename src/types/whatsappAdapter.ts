/**
 * Backward-compatible type shim.
 * Canonical source of truth is `./whatsapp`.
 */

export type {
  TemplateListReference,
  SocketAdapter,
  WhatsappWidgetApiAdapter,
  WhatsappWidgetConfig,
} from "./whatsapp";

export type SendWhatsAppMessagePayloadAdapter = import("./whatsapp").SendWhatsAppMessagePayload;
export type SendTemplatePayloadAdapter = import("./whatsapp").SendWhatsAppTemplatePayload;
