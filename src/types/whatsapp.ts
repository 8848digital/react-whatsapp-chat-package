import type { ReactNode } from "react";

/** Template CTA link for card display (button_label + URL) */
export interface MessageTemplateLink {
  button_label: string;
  link: string;
}

/** Link item from activity API (template buttons) */
export interface ActivityTemplateLink {
  button_label?: string;
  link?: string;
  website_url?: string;
}

/** WhatsApp Template item from get_templates_list API */
export interface WhatsAppTemplateResponse {
  name: string;
  owner?: string;
  creation?: string;
  modified?: string;
  modified_by?: string;
  docstatus?: number;
  idx?: number;
  template_name: string;
  actual_name?: string;
  status: string;
  id: string;
  template: string;
  sample_values: string | null;
  for_doctype: string | null;
  field_names: string | null;
  category: string;
  language: string;
  language_code: string;
  whatsapp_account?: string;
  header_type?: string;
  header: string | null;
  sample?: string | null;
  footer: string | null;
  links?: Array<{
    name?: string;
    button_type?: string;
    button_label?: string;
    link?: string;
    [key: string]: unknown;
  }>;
  [key: string]: unknown;
}

export interface Message {
  name: string;
  message: string;
  sender: string;
  creation: string;
  is_outbound: number;
  attach?: string;
  content_type?: string;
  status?: number; // 1: Sent, 2: Failed, 3: Delivered, 4: Read, 5: Pending
  /** Template message: header (bold title) */
  header?: string | null;
  /** Template message: footer text */
  footer?: string | null;
  /** Template message: CTA buttons (label + URL) for card */
  template_links?: MessageTemplateLink[];
  /** From API: "Template" = template message (show card when header/body/links present) */
  message_type?: string;
  /** Template header type: "TEXT" | "IMAGE" | "DOCUMENT" */
  header_type?: string | null;
  /** Template sample media path (IMAGE/DOCUMENT) - open in new tab when clicked */
  sample?: string | null;
  /** Optional reference to associate message with a record */
  reference_doctype?: string | null;
  reference_name?: string | null;
  /** Incoming sender phone/id */
  from?: string | null;
  /** Incoming sender display name */
  from_name?: string | null;
}

/** Incoming socket doc shape (reference_doctype/reference_name may be null). */
export interface IncomingSocketDoc {
  name: string;
  message?: string;
  creation?: string;
  type?: string;
  from?: string;
  profile_name?: string;
  attach?: string | null;
  content_type?: string | null;
}

/** Full socket doc shape (whatsapp_message event payload from Frappe). */
export interface SocketMessageDoc {
  name: string;
  message?: string;
  creation?: string;
  type?: string; // "Incoming" | "Outgoing"
  from?: string | null;
  status?: string | null;
  reference_doctype?: string | null;
  reference_name?: string | null;
  profile_name?: string | null;
  from_name?: string | null; // From API results
  attach?: string | null;
  content_type?: string | null;
  message_type?: string;
  header?: string | null;
  footer?: string | null;
  template?: string | null;
  links?: Array<{ button_label?: string; link?: string; [key: string]: unknown }>;
  header_type?: string | null;
  sample?: string | null;
  [key: string]: unknown;
}

/** Raw socket payload from host app used in pass-through mode */
export interface SocketPayload {
  event: string;
  message?: SocketMessageDoc | any;
  [key: string]: unknown;
}

/** Activity item shape (e.g. from activity API) used to render a single message in MessageList */
export interface ActivityLikeProps {
  name?: string;
  message?: string;
  type?: string;
  is_outbound?: number;
  attach?: string;
  content_type?: string;
  creation?: string;
  date?: string;
  time?: string;
  status?: string | number;
  message_type?: string;
  header?: string | null;
  footer?: string | null;
  links?: ActivityTemplateLink[];
  header_type?: string | null;
  sample?: string | null;
}

/** MessageList component props */
export interface MessageListProps {
  messages?: Message[];
  /** Show loading state (e.g. while fetching messages). */
  isLoading?: boolean;
  /** Error message to show when messages failed to load. */
  error?: string | null;
  activity?: ActivityLikeProps;
  icon?: ReactNode;
  showIcon?: boolean;
  enableScroll?: boolean;
}

/** File attached to a WhatsApp message (before send) */
export interface AttachedFile {
  file: File;
  preview?: string;
  fileUrl?: string;
  contentType: string;
}

/** MessageInput component props */
export interface MessageInputProps {
  onSend: (text: string, attach?: string, contentType?: string) => void;
  isLoading?: boolean;
  /** Show loading on attach button while file is uploading */
  isUploading?: boolean;
  /** Show loading on send button while message/template is sending */
  isSending?: boolean;
  onTemplateClick?: () => void;
  templateText?: string;
  /** Template API name when in "template mode" (e.g. hello_world-en_US). When set, Send uses send_whatsapp_template; when undefined, Send uses create_whatsapp_message. */
  selectedTemplateName?: string;
  /** Full template metadata for preview card */
  selectedTemplate?: WhatsAppTemplateResponse;
  onClearTemplate?: () => void;
  attachedFile?: AttachedFile | null;
  onFileRemove?: () => void;
  onFileSelect?: (file: File) => void;
  // Preview state
  isPreviewOpen?: boolean;
  setIsPreviewOpen?: (open: boolean) => void;
}

/** AttachmentPreview component props */
export interface AttachmentPreviewProps {
  attachedFile: AttachedFile;
  onFileRemove?: () => void;
}

/** TemplateChipWithPreview component props */
export interface TemplateChipWithPreviewProps {
  /** Template API name (e.g. hello_world-en_US); display uses part before first "-" */
  selectedTemplateName: string;
  /** Full template body text for preview modal */
  templateText?: string;
  /** Full template metadata for richer preview; optional to avoid extra fetch */
  template?: WhatsAppTemplateResponse;
  /** Called when user clicks remove (X) to clear the selected template */
  onClearTemplate: () => void;
  // Preview state from hook
  isPreviewOpen?: boolean;
  setIsPreviewOpen?: (open: boolean) => void;
}

/** TemplateMessageCard component props */
export interface TemplateMessageCardProps {
  header?: string | null;
  message: string;
  footer?: string | null;
  template_links?: MessageTemplateLink[];
  creation: string;
  is_outbound: number;
  status?: number;
  /** "TEXT" | "IMAGE" | "DOCUMENT" - controls how header is rendered */
  header_type?: string | null;
  /** Sample media path for IMAGE/DOCUMENT - opened in new tab when clicked */
  sample?: string | null;
  isPreview?: boolean;
}

/** WhatsApp Zustand store state and actions */
export interface WhatsappState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  referenceDoctype: string | null;
  referenceName: string | null;

  setReference: (doctype: string, name: string) => void;
  fetchMessages: (doctype: string, name: string) => Promise<void>;
  setMessages: (messages: Message[]) => void;
  updateMessageStatus: (name: string, status: number) => void;
  appendMessage: (message: Message) => void;
  clearMessages: () => void;
}

export interface WhatsAppTemplateSelectorProps {
  templates: WhatsAppTemplateResponse[];
  /** templateBody: preview text for input; templateName: API name (e.g. hello_world-en_US) for send_whatsapp_template */
  onSelect: (templateBody: string, templateName: string, template: WhatsAppTemplateResponse) => void;
  isLoading?: boolean;
}

export interface WhatsappChatLink {
  link_doctype: string;
  link_name: string;
}

export interface WhatsappChatProps {
  referenceDoctype?: string;
  referenceName?: string | null;
  toPhone?: string;
  /** When false, skips initial fetch (e.g. modal closed). Fetch runs when this becomes true. */
  isOpen?: boolean;
  /** Optional links to associate with the message (e.g. CRM Task from assigned task) */
  links?: WhatsappChatLink[];
  /** NEW: Decoupled Props to avoid useAuthStore/useLeadStore inside the component */
  currentUserEmail?: string;
  contextDoctype?: string;
  contextName?: string;
}

export interface UseWhatsappChatLogicParams {
  referenceDoctype?: string;
  referenceName?: string | null;
  toPhone?: string;
  isOpen?: boolean;
  links?: WhatsappChatLink[];
  apiAdapter?: WhatsappWidgetApiAdapter;
}

/** Reference to a doctype/name for fetching templates */
export interface TemplateListReference {
  reference_doctype: string;
  reference_name: string;
}

/** Package Configuration */
export interface WhatsappWidgetConfig {
  currentUser: string;
  activeLeadName?: string;
  activeLeadDoctype?: string;
  doctype: string;
  refName: string;
  phone: string;
  links?: WhatsappChatLink[];
  isChatOpen: boolean;
  apiBaseUrl?: string; // Optional: used by internal default adapter
}

/** 
 * Simple Socket Adapter for "Pass-through" mode.
 * The app handles the actual Socket.io connection and just 
 * notifies the widget of connection status and messages.
 */
export interface SocketAdapter {
  isConnected: boolean;
  /** Register a callback for incoming messages. */
  onMessage: (cb: (msg: Message) => void) => void;
  /** Unregister a callback. */
  offMessage: (cb: (msg: Message) => void) => void;
}

/** 
 * Unified API Adapter for WhatsApp operations.
 * Allows the widget to be decoupled from specific API clients like Axios or React Query.
 */
export interface WhatsappWidgetApiAdapter {
  /** Fetch chat history for a specific contact. */
  getMessages: (doctype: string, name: string) => Promise<Message[]>;
  /** Send a plain text or file message. */
  sendMessage: (payload: {
    to: string;
    message: string;
    attach?: string;
    content_type?: string;
    reference_doctype?: string;
    reference_name?: string;
    links?: WhatsappChatLink[];
  }) => Promise<{ name?: string }>;
  /** Send a WhatsApp Template message. */
  sendTemplate: (payload: {
    to: string;
    template: string;
    reference_doctype?: string;
    reference_name?: string;
    links?: WhatsappChatLink[];
  }) => Promise<any>;
  /** Fetch available templates for the context. */
  getTemplates: (refs: TemplateListReference[]) => Promise<WhatsAppTemplateResponse[]>;
  /** Upload a file and return its URL. */
  uploadFile: (file: File) => Promise<{ file_url: string }>;
  /** Mark a specific message as read. */
  sendReadReceipt: (messageName: string) => Promise<void>;
  /** Fetch current unread count for the contact. */
  getUnreadCount: (phone: string, referenceName: string) => Promise<number>;
  /** Optional: Fetch full list of incoming communications (for state-based badge management). */
  getIncomingCommunications?: (user: string) => Promise<IncomingCommunication[]>;
  /** Optional callback fired after a message is successfully sent. */
  onMessageSent?: () => void;
  /** Optional notification handler. */
  showNotification?: (title: string, message: string) => void;
  showWarning?: (title: string, message: string) => void;
  showError?: (title: string, message: string) => void;
}

/** Main Widget Props */
export interface WhatsappChatProps {
  // --- Legacy / Simple Props ---
  referenceDoctype?: string;
  referenceName?: string | null;
  toPhone?: string;
  isOpen?: boolean;
  links?: WhatsappChatLink[];
  currentUserEmail?: string;
  contextDoctype?: string;
  contextName?: string;

  // --- New Decoupled Adapter Props (Recommended) ---
  config?: WhatsappWidgetConfig;
  apiAdapter?: WhatsappWidgetApiAdapter;
  socketAdapter?: SocketAdapter;

  // --- Internal Mode Props ---
  baseURL?: string;
  token?: string;
}

export interface WhatsAppMessage {
  name: string;
  type: "Outgoing" | "Incoming" | string;
  to: string;
  from: string | null;
  content_type: string;
  message_type: string;
  attach: string | null;
  template: string | null;
  use_template: number;
  message_id: string;
  is_reply: number;
  reply_to_message_id: string | null;
  creation: string;
  message: string;
  status: string | null;
  reference_doctype: string;
  reference_name: string;
  template_parameters: unknown | null;
  template_header_parameters: unknown | null;
  modified: string;
  from_name: string;
  template_name?: string;
  header?: string | null;
  footer?: string | null;
  links?: Array<{ button_label?: string; link?: string; [key: string]: unknown }>;
  header_type?: string | null;
  sample?: string | null;
}

export interface GetWhatsAppMessagesResponse {
  message: WhatsAppMessage[];
}

export interface GetWhatsAppMessagesPayload {
  reference_doctype: string;
  reference_name: string;
}

export interface SendWhatsAppMessagePayload {
  reference_doctype?: string;
  reference_name?: string;
  message: string;
  to: string;
  attach?: string;
  content_type?: string;
  reply_to?: string;
  links?: WhatsappChatLink[];
}

export interface FrappeMethodResponse {
  message: string;
  name?: string;
}

export interface GetTemplatesListResponse {
  message: { status: string; data: WhatsAppTemplateResponse[] };
}

export interface SendWhatsAppTemplatePayload {
  reference_doctype?: string;
  reference_name?: string;
  to: string;
  template: string;
  links?: WhatsappChatLink[];
}

export interface SendWhatsAppTemplateResponse {
  message?: string;
  data?: unknown;
}

export interface SendReadReceiptPayload {
  name: string;
}

export interface SendReadReceiptResponse {
  message?: string;
}

export interface UploadFileResponse {
  message?: {
    name?: string;
    file_name?: string;
    file_url?: string;
    file_size?: number;
    [key: string]: unknown;
  };
}

export interface WhatsAppMessageData {
  message?: string;
  content_type?: string;
  profile_name?: string;
  from?: string;
  creation?: string;
  [key: string]: unknown;
}

export interface CommunicationData {
  subject?: string;
  content?: string;
  sender?: string;
  sender_full_name?: string;
  recipients?: string;
  [key: string]: unknown;
}

export interface IncomingCommunication {
  from?: string;
  sender?: string;
  profile_name?: string;
  counts: number;
  received_at: string;
  names: string[];
  customer: string;
  type: "whatsapp" | "communication" | "email";
  full_name: string;
  is_current?: boolean;
  data?: (WhatsAppMessageData | CommunicationData | null)[];
}

export interface GetIncomingCommunicationsResponse {
  message: {
    status: string;
    data: IncomingCommunication[];
  };
}
