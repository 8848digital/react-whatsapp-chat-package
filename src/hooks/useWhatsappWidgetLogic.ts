"use client";
import { useCallback, useState, useEffect, useMemo, useRef } from "react";
import type { Message, AttachedFile, WhatsAppTemplateResponse, WhatsappChatLink, SocketPayload } from "../types/whatsapp";
import { transformToMessage } from "../utils/whatsapp";
import {
  useWhatsappChatConfig,
  useWhatsappWidgetZustand,
  useWhatsappWidgetStore,
} from "../context/WhatsappChatContext";

/** 
 * Utility to derive WhatsApp-compatible content type from a File object.
 * Maps mime types to "image", "video", "audio", or "document".
 */
function getWhatsAppContentType(file: File): string {
  if (file.type.startsWith("image/")) return "image";
  if (file.type.startsWith("video/")) return "video";
  if (file.type.startsWith("audio/")) return "audio";
  return "document";
}

/**
 * Core logic hook for the WhatsApp Chat Widget.
 * Orchestrates API calls, socket listeners, state management, and file handling.
 * This hook is UI-agnostic and provides all necessary data for the Chat Widget components.
 */
export function useWhatsappWidgetLogic() {
  const { config, apiAdapter, socketAdapter, socketPayload } = useWhatsappChatConfig();
  const store = useWhatsappWidgetStore();

  // State from specialized Zustand store (reactive parts for rendering)
  const messages = useWhatsappWidgetZustand((s) => s.messages);
  const isLoading = useWhatsappWidgetZustand((s) => s.isLoading);
  const error = useWhatsappWidgetZustand((s) => s.error);
  const setMessages = useWhatsappWidgetZustand((s) => s.setMessages);
  const appendMessage = useWhatsappWidgetZustand((s) => s.appendMessage);
  const replaceMessage = useWhatsappWidgetZustand((s) => s.replaceMessage);
  const updateMessageStatus = useWhatsappWidgetZustand((s) => s.updateMessageStatus);
  const setLoading = useWhatsappWidgetZustand((s) => s.setLoading);
  const setError = useWhatsappWidgetZustand((s) => s.setError);

  const [isSending, setIsSending] = useState(false);
  const isConnected = socketAdapter?.isConnected ?? true;

  // Local Template Selection State
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);
  const [selectedTemplateText, setSelectedTemplateText] = useState<string | undefined>();
  const [selectedTemplateName, setSelectedTemplateName] = useState<string | undefined>();
  const [selectedTemplate, setSelectedTemplate] = useState<WhatsAppTemplateResponse | undefined>();
  const [templates, setTemplates] = useState<WhatsAppTemplateResponse[]>([]);
  const [isLoadingTemplates, setIsLoadingTemplates] = useState(false);

  // Local File Upload State
  const [attachedFile, setAttachedFile] = useState<AttachedFile | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  /**
   * Consolidates reference logic (Doctype/Name) based on whether an Active Lead is present.
   * If an active lead exists, it promotes the Lead as the primary reference and links the base Contact.
   */
  const whatsappReferences = useMemo(() => {
    const baseDoctype = config.doctype || "";
    const baseName = config.refName || "";
    const activeLeadDoctype = config.activeLeadDoctype || "";
    const activeLeadName = config.activeLeadName || "";

    let primaryDoctype = baseDoctype;
    let primaryName = baseName;
    let secondaryLinks = config.links || [];

    if (activeLeadName) {
      primaryDoctype = activeLeadDoctype;
      primaryName = activeLeadName;
      secondaryLinks = baseDoctype ? [{ link_doctype: baseDoctype, link_name: baseName }] : [];
    } else {
      // Logic to find a Lead within links to prioritize it (matches legacy behavior)
      const leadInLinks = config.links?.find((l: WhatsappChatLink) => l.link_doctype?.includes("Lead"));
      if (leadInLinks) {
        primaryDoctype = leadInLinks.link_doctype;
        primaryName = leadInLinks.link_name;
        secondaryLinks = baseDoctype ? [{ link_doctype: baseDoctype, link_name: baseName }] : [];
      }
    }

    // Prepare reference array for loading compatible templates
    const templateRefs = activeLeadName
      ? [{ reference_doctype: activeLeadDoctype, reference_name: activeLeadName }]
      : [{ reference_doctype: baseDoctype, reference_name: baseName }, ...(config.links || []).map((l: WhatsappChatLink) => ({ reference_doctype: l.link_doctype, reference_name: l.link_name }))];

    return {
      primaryDoctype,
      primaryName,
      secondaryLinks,
      templateRefs,
      baseDoctype,
      baseName,
      activeLeadDoctype,
      activeLeadName
    };
  }, [config]);

  // Ref to hold the latest accessor to avoid triggering the fetch effect continuously
  const getMessagesRef = useRef(apiAdapter.getMessages);
  useEffect(() => {
    getMessagesRef.current = apiAdapter.getMessages;
  }, [apiAdapter.getMessages]);

  /**
   * Effect: Fetch initial message history when the contact reference changes AND the chat is open.
   */
  useEffect(() => {
    if (!config.isChatOpen || config.preventHistoryFetch) return;

    const fetch = async () => {
      setLoading(true);
      setError(null);
      try {
        const msgs = await getMessagesRef.current?.(config.doctype || "", config.refName || "");
        if (msgs) setMessages([...msgs].reverse());
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch");
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [config.isChatOpen, config.doctype, config.refName, setLoading, setError, setMessages]);

  /**
   * Effect: Preload available WhatsApp templates when the template modal is opened.
   */
  useEffect(() => {
    if (!isTemplateModalOpen || templates.length > 0) return;
    const fetchTemplates = async () => {
      setIsLoadingTemplates(true);
      try {
        const data = await apiAdapter.getTemplates?.(whatsappReferences.templateRefs);
        if (data) setTemplates(data);
      } catch (e) {
        console.error("Template fetch failed", e);
      } finally {
        setIsLoadingTemplates(false);
      }
    };
    fetchTemplates();
  }, [isTemplateModalOpen, apiAdapter, whatsappReferences.templateRefs, templates.length]);


  const hasCaughtUpReadReceipts = useRef(false);
  const markedReadIds = useRef(new Set<string>());
  const lastOutboundTempIdRef = useRef<string | null>(null);
  const lastOutboundTemplateTempIdRef = useRef<string | null>(null);

  /**
   * Effect: Automatically mark unread messages as read once when the chat is opened.
   * This effect waits for messages to load and performs a catch-up precisely once.
   * Subsequent new messages are handled by the more efficient socket listener.
   */
  useEffect(() => {
    // 1. Reset guards when modal is closed
    if (!config.isChatOpen) {
      hasCaughtUpReadReceipts.current = false;
      markedReadIds.current.clear();
      return;
    }

    // 2. Only proceed if we haven't caught up, we have messages, and the API is ready
    if (hasCaughtUpReadReceipts.current || !messages.length || !apiAdapter.sendReadReceipt) {
      return;
    }

    // 3. Find if there are ANY unread incoming messages 
    const latestUnread = messages.findLast((m) => m.is_outbound === 0 && (m.status === null || m.status === undefined));

    if (latestUnread?.name && !markedReadIds.current.has(latestUnread.name)) {
      // 4. Mark the latest one as read (Server logic usually handles all previous ones)
      apiAdapter.sendReadReceipt(latestUnread.name);
      markedReadIds.current.add(latestUnread.name);
      
      // 5. CRITICAL: Update guard IMMEDIATELY to prevent this effect from re-running
      hasCaughtUpReadReceipts.current = true;
    } else if (messages.length > 0) {
      // If we found messages but none are unread, we are also "caught up"
      hasCaughtUpReadReceipts.current = true;
    }
  }, [config.isChatOpen, messages, apiAdapter]);


  /** Clears the currently selected attachment and revokes its local preview URL. */
  const handleFileRemove = useCallback(() => {
    setAttachedFile((prev) => {
      if (prev?.preview) {
        URL.revokeObjectURL(prev.preview);
      }
      return null;
    });
  }, []);

  /**
   * Primary handler for sending a message or a template.
   */
  const sendMessage = useCallback(
    async (text: string, attach?: string, contentType?: string) => {
      const {
        primaryDoctype,
        primaryName,
        secondaryLinks,
        baseDoctype,
        baseName,
        activeLeadDoctype,
        activeLeadName
      } = whatsappReferences;

      const commonToPayload = {
        to: config.phone,
      };

      // --- Template Sending Logic ---
      if (selectedTemplateName) {
        const templateForDoctype = (selectedTemplate?.for_doctype ?? "").trim();
        let finalRefDoctype = primaryDoctype;
        let finalRefName = primaryName;
        let finalLinks = secondaryLinks;

        if (templateForDoctype.includes("Lead")) {
          finalRefDoctype = activeLeadDoctype || templateForDoctype;
          finalRefName = activeLeadName || primaryName;
          finalLinks = baseDoctype ? [{ link_doctype: baseDoctype, link_name: baseName }] : [];
        } else {
          finalRefDoctype = baseDoctype || primaryDoctype;
          finalRefName = baseName || primaryName;
          finalLinks = config.links || [];
        }

        const tempId = `temp-${Date.now()}`;
        lastOutboundTemplateTempIdRef.current = tempId;
        const templateMessage: Message = {
          name: tempId,
          message: selectedTemplateText ?? selectedTemplate?.template ?? "",
          sender: "You",
          creation: new Date().toISOString(),
          is_outbound: 1,
          status: 5,
          message_type: "Template",
          header: selectedTemplate?.header,
          footer: selectedTemplate?.footer,
        };
        appendMessage(templateMessage);
        setIsSending(true);
        try {
          await apiAdapter.sendTemplate({
            ...commonToPayload,
            reference_doctype: finalRefDoctype,
            reference_name: finalRefName,
            template: selectedTemplateName,
            links: finalLinks,
          });

          // Rely on socket for final swap and status update
          updateMessageStatus(tempId, 1);
          apiAdapter.showNotification?.("WhatsApp", "Template sent successfully");

          setSelectedTemplateName(undefined);
          setSelectedTemplateText(undefined);
          setSelectedTemplate(undefined);
          handleFileRemove();
          if (apiAdapter.onMessageSent) apiAdapter.onMessageSent();
        } catch (error) {
          console.error(error);
          updateMessageStatus(tempId, 2);
          apiAdapter.showError?.("WhatsApp", "Failed to send template message");
        } finally {
          setIsSending(false);
        }
        return;
      }

      // --- Regular Message Sending Logic ---
      const messageText = (text || "").trim();
      if (!messageText && !attach) return;

      const tempId = `temp-${Date.now()}`;
      lastOutboundTempIdRef.current = tempId;
      appendMessage({
        name: tempId,
        message: messageText,
        sender: "You",
        creation: new Date().toISOString(),
        is_outbound: 1,
        attach: attach,
        content_type: contentType,
        status: 5,
      });

      setIsSending(true);
      try {
        await apiAdapter.sendMessage({
          ...commonToPayload,
          reference_doctype: primaryDoctype,
          reference_name: primaryName,
          message: messageText,
          attach: attach || "",
          content_type: contentType,
          links: secondaryLinks,
        });

        // Use socket for real-time status/identity sync
        updateMessageStatus(tempId, 1);
        apiAdapter.showNotification?.("WhatsApp", "Message sent successfully");

        handleFileRemove();
        if (apiAdapter.onMessageSent) apiAdapter.onMessageSent();
      } catch (error) {
        console.error(error);
        updateMessageStatus(tempId, 2);
        apiAdapter.showError?.("WhatsApp", "Failed to send message");
      } finally {
        setIsSending(false);
      }
    },
    [selectedTemplateName, apiAdapter, config.phone, config.links, selectedTemplate, selectedTemplateText, appendMessage, updateMessageStatus, whatsappReferences, handleFileRemove]
  );

  /** Handles the selection of a template from the template library. */
  const handleTemplateSelect = (preview: string, apiName: string, template: WhatsAppTemplateResponse) => {
    setSelectedTemplateText(preview);
    setSelectedTemplateName(apiName);
    setSelectedTemplate(template);
    setIsTemplateModalOpen(false);
  };

  /** Handles local file selection, triggers upload to server, and manages local previews. */
  const handleFileSelect = useCallback(async (file: File) => {
    if (!apiAdapter.uploadFile) return;
    setIsUploading(true);

    const contentType = getWhatsAppContentType(file);
    let preview: string | undefined;
    if (file.type.startsWith("image/")) {
      preview = URL.createObjectURL(file);
    }

    try {
      const { file_url } = await apiAdapter.uploadFile(file);
      setAttachedFile({ file, fileUrl: file_url, contentType, preview });
    } catch (e) {
      console.error(e);
      apiAdapter.showError?.("WhatsApp", "Failed to upload file");
      if (preview) URL.revokeObjectURL(preview);
      setAttachedFile(null);
    } finally {
      setIsUploading(false);
    }
  }, [apiAdapter]);


  /**
   * Effect: Handles all real-time socket messages (Unified Listener).
   */
  useEffect(() => {
    // Shared processing logic to handle both structured adapter and raw payloads
    const onNewMessage = (msg: Message | null) => {
      if (!msg || !msg.name) return;

      const currentMessages = store.getState().messages;
      let tempIndex = -1;

      // 1. Read receipt logic: Only if chat is open AND it's an incoming message
      if (config.isChatOpen && msg.is_outbound === 0 && msg.name && config.phone === msg.from) {
        const isRead = msg.status === 4;
        if (!isRead && !markedReadIds.current.has(msg.name)) {
          apiAdapter.sendReadReceipt?.(msg.name);
          markedReadIds.current.add(msg.name);
        }
      }

      // 2. Outgoing message matching & replacement (Swap "temp-" for real server ID)
      if (msg.is_outbound === 1) {
        if (msg.message_type === "Template") {
          const preferredId = lastOutboundTemplateTempIdRef.current;
          if (preferredId) {
            tempIndex = currentMessages.findIndex((m: Message) => m.name === preferredId);
          }
          if (tempIndex === -1) {
            // Fallback: last temp template
            for (let i = currentMessages.length - 1; i >= 0; i--) {
              const m = currentMessages[i];
              if (m.name.startsWith("temp-") && m.message_type === "Template") {
                tempIndex = i;
                break;
              }
            }
          }
        } else {
          const preferredId = lastOutboundTempIdRef.current;
          if (preferredId) {
            tempIndex = currentMessages.findIndex((m: Message) => m.name === preferredId);
          }
          if (tempIndex === -1) {
            // Fallback: match by content when possible (text-only), then last outbound temp
            if (msg.message) {
              tempIndex = currentMessages.findIndex((m: Message) => m.name.startsWith("temp-") && m.is_outbound === 1 && m.message === msg.message);
            }
            if (tempIndex === -1) {
              for (let i = currentMessages.length - 1; i >= 0; i--) {
                const m = currentMessages[i];
                if (m.name.startsWith("temp-") && m.is_outbound === 1 && m.message_type !== "Template") {
                  tempIndex = i;
                  break;
                }
              }
            }
          }
        }
      }

      if (tempIndex !== -1) {
        const tempMsg = currentMessages[tempIndex];
        replaceMessage(tempMsg.name, msg);
        if (tempMsg.name === lastOutboundTempIdRef.current) lastOutboundTempIdRef.current = null;
        if (tempMsg.name === lastOutboundTemplateTempIdRef.current) lastOutboundTemplateTempIdRef.current = null;
      } else {
        const alreadyExists = currentMessages.some((m: Message) => m.name === msg.name);
        if (!alreadyExists) {
          appendMessage(msg);
        } else if (msg.status !== undefined && msg.is_outbound === 1) {
          updateMessageStatus(msg.name, msg.status);
        }
      }
    };

    // Case A: Structured Adapter Mode (Preferred)
    if (socketAdapter?.onMessage) {
      const handler = (msg: Message) => onNewMessage(msg);
      socketAdapter.onMessage(handler);
      return () => socketAdapter.offMessage?.(handler);
    }

    // Case B: Raw Pass-through Mode (Fallback)
    if (socketPayload && socketPayload.event === "whatsapp_message") {
      const rawMsg = socketPayload.message;
      const msg = transformToMessage(rawMsg);
      onNewMessage(msg);
    }

    return undefined;
  }, [socketAdapter, socketPayload, config.phone, config.isChatOpen, apiAdapter, store, replaceMessage, appendMessage, updateMessageStatus]);

  return {
    displayMessages: messages,
    isLoading,
    messagesError: error,
    isConnected,
    isSending,
    isTemplateModalOpen,
    setIsTemplateModalOpen,
    selectedTemplateText,
    selectedTemplateName,
    selectedTemplate,
    setSelectedTemplateText,
    setSelectedTemplateName,
    setSelectedTemplate,
    attachedFile,
    templates,
    isLoadingTemplates,
    sendMessage,
    handleTemplateSelect,
    handleFileSelect,
    handleFileRemove,
    uploadFileMutation: { isPending: isUploading },
  };
}
