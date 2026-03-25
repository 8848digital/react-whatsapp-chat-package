import axios from "axios";
import type { 
  WhatsAppMessage, GetWhatsAppMessagesPayload, GetWhatsAppMessagesResponse,
  FrappeMethodResponse, SendWhatsAppMessagePayload, TemplateListReference,
  GetTemplatesListResponse, SendWhatsAppTemplatePayload, SendWhatsAppTemplateResponse,
  SendReadReceiptPayload, SendReadReceiptResponse, UploadFileResponse,
  GetIncomingCommunicationsResponse
} from "../types/whatsapp";

/**
 * Internal API client for the WhatsApp widget.
 */
export const createWhatsAppClient = (baseURL: string, token?: string) => {
  const client = axios.create({
    baseURL,
    withCredentials: true,
  });

  if (token) {
    client.defaults.headers.common["Authorization"] = `token ${token}`;
  }

  return {
    getMessages: async (payload: GetWhatsAppMessagesPayload) => {
      const params = new URLSearchParams();
      params.append("reference_doctype", payload.reference_doctype);
      params.append("reference_name", payload.reference_name);
      const url = `/api/method/crm_integration.crm_integration.api.whatsapp.get_whatsapp_messages?${params.toString()}`;
      const res = await client.get<GetWhatsAppMessagesResponse>(url, { 
        headers: { "Content-Type": "text/plain" } 
      });
      return res.data;
    },
    sendMessage: async (payload: SendWhatsAppMessagePayload) => {
      const params = new URLSearchParams();
      if (payload.reference_doctype) params.append("reference_doctype", payload.reference_doctype);
      if (payload.reference_name) params.append("reference_name", payload.reference_name);
      params.append("message", payload.message);
      params.append("to", payload.to);
      if (payload.attach) params.append("attach", payload.attach);
      if (payload.content_type) params.append("content_type", payload.content_type);
      if (payload.reply_to !== undefined) params.append("reply_to", payload.reply_to || "");
      if (payload.links?.length) params.append("links", JSON.stringify(payload.links));

      const url = `/api/method/crm_integration.crm_integration.api.whatsapp.create_whatsapp_message?${params.toString()}`;
      const res = await client.post<FrappeMethodResponse>(url, undefined, {
        headers: { "Content-Type": "text/plain" }
      });
      return res.data;
    },
    getTemplates: async (references: TemplateListReference[]) => {
      const params = new URLSearchParams();
      params.set("references", JSON.stringify(references));
      const url = `/api/method/crm_integration.crm_integration.api.whatsapp.get_templates_list?${params.toString()}`;
      const res = await client.get<GetTemplatesListResponse>(url);
      return res.data;
    },
    sendTemplate: async (payload: SendWhatsAppTemplatePayload) => {
      const url = "/api/method/crm_integration.crm_integration.api.whatsapp.send_whatsapp_template";
      const formData = new FormData();
      if (payload.reference_doctype) formData.append("reference_doctype", payload.reference_doctype);
      if (payload.reference_name) formData.append("reference_name", payload.reference_name);
      formData.append("to", payload.to);
      formData.append("template", payload.template);
      if (payload.links?.length) formData.append("links", JSON.stringify(payload.links));
      const res = await client.post<SendWhatsAppTemplateResponse>(url, formData);
      return res.data;
    },
    sendReadReceipt: async (payload: SendReadReceiptPayload) => {
      const params = new URLSearchParams();
      params.append("name", payload.name);
      const url = `/api/method/crm_integration.crm_integration.api.whatsapp.send_read_receipt?${params.toString()}`;
      const res = await client.get<SendReadReceiptResponse>(url, { 
        headers: { "Content-Type": "text/plain" } 
      });
      return res.data;
    },
    uploadFile: async (file: File) => {
      const url = "/api/method/upload_file";
      const formData = new FormData();
      formData.append("file", file);
      const res = await client.post<UploadFileResponse>(url, formData);
      return res.data;
    },
    getIncomingCommunications: async (user: string) => {
      const params = new URLSearchParams();
      params.set("user", user);
      const url = `/api/method/crm_integration.crm_integration.api.dashboard.get_incoming_communications?${params.toString()}`;
      const res = await client.get<GetIncomingCommunicationsResponse>(url);
      return res.data;
    }
  };
};
