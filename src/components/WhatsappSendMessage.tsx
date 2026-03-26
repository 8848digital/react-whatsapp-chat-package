"use client";
import React from "react";
import { User } from "./common/Icons";
import { MessageInput } from "./MessageInput";
import WhatsAppTemplateSelector from "./WhatsAppTemplateSelector";
import Modal from "./common/Modal";
import { WhatsappChatProvider, useWhatsappChatConfig } from "../context/WhatsappChatContext";
import { useWhatsappWidgetLogic } from "../hooks/useWhatsappWidgetLogic";
import { useWhatsappWidgetResolution } from "../hooks/useWhatsappWidgetResolution";
import type { WhatsappWidgetApiAdapter, WhatsappWidgetConfig, SocketAdapter, SocketPayload, WhatsappChatLink } from "../types/whatsapp";

export const WhatsappSendMessageWidget = () => {
  const {
    isLoading,
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

  const { config } = useWhatsappChatConfig();

  return (
    <>
      <div className="whatsapp-chat-container whatsapp-send-msg-only">
        {/* <div className="whatsapp-header">
          <div className="whatsapp-header-avatar">
            <User size={20} color="#008069" />
          </div>
          <div className="whatsapp-header-info">
            <h4>{config.currentUserFullName || "Send WhatsApp Message"}</h4>
            <span className={isConnected ? "connection-status connected" : "connection-status reconnecting"}>
              {isConnected ? "● Connected" : "○ Reconnecting..."}
            </span>
          </div>
        </div> */}

        {/* MessageList is omitted here as per requirements */}
        <div className="whatsapp-send-only-spacer" style={{ flex: 1, minHeight: "20px" }}></div>

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

export interface WhatsappSendMessageProps {
  apiAdapter?: WhatsappWidgetApiAdapter;
  config?: WhatsappWidgetConfig;
  socketAdapter?: SocketAdapter;
  baseURL?: string;
  token?: string;
  socketPayload?: SocketPayload;
  socketConnected?: boolean;
  currentUserEmail?: string;
  currentUserFullName?: string;
  phone?: string;
  refDoctype?: string;
  refName?: string | null;
  links?: WhatsappChatLink[];
  showNotification?: (title: string, message: string) => void;
  showWarning?: (title: string, message: string) => void;
  showError?: (title: string, message: string) => void;
}

export const WhatsappSendMessage = ({
  apiAdapter: externalApiAdapter,
  config: externalConfig,
  socketAdapter: externalSocketAdapter,
  socketPayload,
  socketConnected,
  baseURL,
  token,
  currentUserEmail,
  currentUserFullName,
  phone,
  refDoctype = "Contact",
  refName = "",
  links = [],
  showNotification,
  showWarning,
  showError,
}: WhatsappSendMessageProps) => {
  const { apiAdapter, config, finalSocketAdapter } = useWhatsappWidgetResolution({
    apiAdapter: externalApiAdapter,
    config: externalConfig,
    socketAdapter: externalSocketAdapter,
    baseURL,
    token,
    socketConnected,
    currentUserEmail,
    currentUserFullName,
    phone,
    refDoctype,
    refName,
    links,
    isChatOpen: true,
    showNotification,
    showWarning,
    showError,
  });

  if (!apiAdapter || !config) return null;

  return (
    <WhatsappChatProvider
      apiAdapter={apiAdapter}
      config={{ ...config, isChatOpen: true, preventHistoryFetch: true }}
      socketAdapter={finalSocketAdapter}
      socketPayload={socketPayload}
    >
      <WhatsappSendMessageWidget />
    </WhatsappChatProvider>
  );
};

export default WhatsappSendMessage;
