"use client";
import React from "react";
import { User } from "./common/Icons";
import { MessageList } from "./MessageList";
import { MessageInput } from "./MessageInput";
import WhatsAppTemplateSelector from "./WhatsAppTemplateSelector";
import Modal from "./common/Modal";
import { WhatsappChatProvider, useWhatsappChatConfig } from "../context/WhatsappChatContext";
import { useWhatsappWidgetLogic } from "../hooks/useWhatsappWidgetLogic";
import { useWhatsappWidgetResolution } from "../hooks/useWhatsappWidgetResolution";
import type { WhatsappWidgetApiAdapter, WhatsappWidgetConfig, SocketAdapter, SocketPayload, WhatsappChatLink } from "../types/whatsapp";
import { wrapApiAdapter } from "../utils/adapter";

export const WhatsappChatWidget = () => {
  const {
    displayMessages,
    isLoading,
    messagesError,
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
    uploadFileMutation,
  } = useWhatsappWidgetLogic();

  return (
    <>
      <div className="whatsapp-chat-container">
        <div className="whatsapp-header">
          <div className="whatsapp-header-avatar">
            <User size={20} color="#008069" />
          </div>
          <div className="whatsapp-header-info">
            <h4>WhatsApp Chat</h4>
            <span className={isConnected ? "connection-status connected" : "connection-status reconnecting"}>
              {isConnected ? "● Connected" : "○ Reconnecting..."}
            </span>
          </div>
        </div>

        <MessageList messages={displayMessages} isLoading={isLoading} error={messagesError} />

        <MessageInput
          onSend={sendMessage}
          isLoading={isLoading || isSending || uploadFileMutation.isPending}
          isUploading={uploadFileMutation.isPending}
          isSending={isSending}
          onTemplateClick={() => setIsTemplateModalOpen(true)}
          templateText={selectedTemplateText}
          selectedTemplateName={selectedTemplateName}
          selectedTemplate={selectedTemplate}
          onClearTemplate={() => {
            setSelectedTemplateName(undefined);
            setSelectedTemplateText(undefined);
            setSelectedTemplate(undefined);
          }}
          attachedFile={attachedFile}
          onFileSelect={handleFileSelect}
          onFileRemove={handleFileRemove}
        />
      </div>

      <Modal
        open={isTemplateModalOpen}
        onClose={() => setIsTemplateModalOpen(false)}
        width="700px"
        header={<h4 className="text-base font-semibold">Select WhatsApp Template</h4>}
      >
        <WhatsAppTemplateSelector templates={templates} onSelect={handleTemplateSelect} isLoading={isLoadingTemplates} />
      </Modal>
    </>
  );
};

export interface WhatsappChatComponentProps {
  // --- Decoupled Mode (Inject your own logic) ---
  apiAdapter?: WhatsappWidgetApiAdapter;
  config?: WhatsappWidgetConfig;
  socketAdapter?: SocketAdapter;

  // --- Internal Mode (Simple pass-through) ---
  baseURL?: string;
  token?: string;

  /** Raw socket.io message payload from host app (e.g. { event: "whatsapp_message", message: { ... } }) */
  socketPayload?: SocketPayload;
  /** Manual override for socket connection status (useful in pass-through mode) */
  socketConnected?: boolean;

  // --- Meta Props ---
  currentUserEmail?: string;
  phone?: string;
  refDoctype?: string;
  refName?: string | null;
  links?: WhatsappChatLink[];

  /** Optional notification overrides */
  showNotification?: (title: string, message: string) => void;
  showWarning?: (title: string, message: string) => void;
  showError?: (title: string, message: string) => void;
}

export const WhatsappChat = ({
  apiAdapter: externalApiAdapter,
  config: externalConfig,
  socketAdapter: externalSocketAdapter,
  socketPayload,
  socketConnected,
  baseURL,
  token,
  currentUserEmail,
  phone,
  refDoctype = "Contact",
  refName = "",
  links = [],
  showNotification,
  showWarning,
  showError,
}: WhatsappChatComponentProps) => {
  const { apiAdapter, config, finalSocketAdapter } = useWhatsappWidgetResolution({
    apiAdapter: externalApiAdapter,
    config: externalConfig,
    socketAdapter: externalSocketAdapter,
    baseURL,
    token,
    socketConnected,
    currentUserEmail,
    phone,
    refDoctype,
    refName,
    links,
    isChatOpen: true, // Standalone component assumes it is active/open if rendered
    showNotification,
    showWarning,
    showError,
  });

  if (!apiAdapter || !config) return null;

  return (
    <WhatsappChatProvider apiAdapter={apiAdapter} config={config} socketAdapter={finalSocketAdapter} socketPayload={socketPayload}>
      <WhatsappChatWidget />
    </WhatsappChatProvider>
  );
};

export default WhatsappChat;
