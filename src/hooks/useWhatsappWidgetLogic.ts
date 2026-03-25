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
   * Effect: Fetch initial message history on mount or when the contact reference changes.
   */
  useEffect(() => {
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
  }, [config.doctype, config.refName, setLoading, setError, setMessages]);

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


  /**
   * Effect: Automatically mark unread messages as read when the chat is opened.
   */
  useEffect(() => {
    if (!config.isChatOpen || !messages.length || !apiAdapter.sendReadReceipt) return;

    // Find the latest incoming message that hasn't been read yet
    const unreadMessages = messages.filter(
      (m) => m.is_outbound === 0 && (m.status === null || m.status === undefined)
    );

    if (unreadMessages.length > 0) {
      // Mark the latest one as read (usually marks previous as well in WhatsApp logic)
      const latestUnread = unreadMessages[unreadMessages.length - 1];
      if (latestUnread.name) {
        apiAdapter.sendReadReceipt(latestUnread.name);
      }
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
   * - Performs optimistic UI updates (adding a 'temp-' ID message).
   * - Switches between regular message API and template API based on selection.
   * - Replaces temp messages with real ones via socket or manual update on success.
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
          const res = await apiAdapter.sendTemplate({
            ...commonToPayload,
            reference_doctype: finalRefDoctype,
            reference_name: finalRefName,
            template: selectedTemplateName,
            links: finalLinks,
          });

          const sentObj = res as { name?: string };
          if (sentObj?.name) {
            replaceMessage(tempId, {
              ...store.getState().messages.find(m => m.name === tempId)!,
              name: sentObj.name,
              status: 1
            });
          } else {
            updateMessageStatus(tempId, 1);
          }

          setSelectedTemplateName(undefined);
          setSelectedTemplateText(undefined);
          setSelectedTemplate(undefined);
          handleFileRemove();
          if (apiAdapter.onMessageSent) apiAdapter.onMessageSent();
          apiAdapter.showNotification?.("WhatsApp", "Template message sent successfully");

          // Fallback: If no socket response arrives, silently resync the messages
          setTimeout(async () => {
            const msgs = await getMessagesRef.current?.(finalRefDoctype, finalRefName);
            if (msgs) setMessages([...msgs].reverse());
          }, 1500);
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
        const res = await apiAdapter.sendMessage({
          ...commonToPayload,
          reference_doctype: primaryDoctype,
          reference_name: primaryName,
          message: messageText,
          attach: attach || "",
          content_type: contentType,
          links: secondaryLinks,
        });

        if (res?.name) {
          replaceMessage(tempId, {
            ...store.getState().messages.find(m => m.name === tempId)!,
            name: res.name,
            status: 1
          });
        } else {
          updateMessageStatus(tempId, 1);
        }

        handleFileRemove();
        if (apiAdapter.onMessageSent) apiAdapter.onMessageSent();
        apiAdapter.showNotification?.("WhatsApp", "Message sent successfully");

        // Fallback: If no socket response arrives, silently resync the messages
        setTimeout(async () => {
          const msgs = await getMessagesRef.current?.(primaryDoctype, primaryName);
          if (msgs) setMessages([...msgs].reverse());
        }, 1500);
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
   * Effect: Handles real-time socket messages (Adapter Mode).
   */
  useEffect(() => {
    if (!socketAdapter?.onMessage || !socketAdapter?.offMessage) return;

    const handleMessage = (msg: Message) => {
      const currentMessages = store.getState().messages;
      let tempIndex = -1;

      if (msg.is_outbound === 0 && msg.name && config.phone === msg.sender) {
        if (msg.status === null || msg.status === undefined) {
          apiAdapter.sendReadReceipt?.(msg.name);
        }
      }

      if (msg.is_outbound === 1) {
        if (msg.message_type === "Template") {
          tempIndex = currentMessages.findIndex((m: Message) => m.name.startsWith("temp-") && m.message_type === "Template");
        } else {
          tempIndex = currentMessages.findIndex((m: Message) => m.name.startsWith("temp-") && m.message === msg.message);
        }
      }

      if (tempIndex !== -1) {
        const tempMsg = currentMessages[tempIndex];
        replaceMessage(tempMsg.name, msg);
      } else {
        const alreadyExists = currentMessages.some((m: Message) => m.name === msg.name);
        if (!alreadyExists) {
          appendMessage(msg);
        } else if (msg.status !== undefined && msg.is_outbound === 1) {
          updateMessageStatus(msg.name, msg.status);
        }
      }
    };

    socketAdapter.onMessage(handleMessage);
    return () => socketAdapter.offMessage?.(handleMessage);
  }, [socketAdapter, config.phone, apiAdapter, store, replaceMessage, appendMessage, updateMessageStatus]);

  /**
   * Effect: Handles raw socket payloads (Pass-through Mode).
   */
  useEffect(() => {
    if (!socketPayload || socketPayload.event !== "whatsapp_message") return;
    
    const rawMsg = socketPayload.message;
    const msg = transformToMessage(rawMsg);
    if (!msg) return;

    const currentMessages = store.getState().messages;
    const alreadyExists = currentMessages.some(m => m.name === msg.name);
    
    if (!alreadyExists) {
      appendMessage(msg);
      // Read receipt for pass-through
      if (msg.is_outbound === 0 && msg.name && config.phone === msg.sender) {
        apiAdapter.sendReadReceipt?.(msg.name);
      }
    }
  }, [socketPayload, config.phone, appendMessage, apiAdapter, store]);

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
