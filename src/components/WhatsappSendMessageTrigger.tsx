"use client";

import React, { useState } from "react";
import { WhatsappSendMessage } from "./WhatsappSendMessage";
import Modal from "./common/Modal";
import { WhatsAppLogo } from "./common/Icons";
import { useWhatsappWidgetResolution } from "../hooks/useWhatsappWidgetResolution";
import type {
  WhatsappWidgetApiAdapter,
  WhatsappWidgetConfig,
  SocketAdapter,
  WhatsappChatLink,
  SocketPayload,
  WhatsappAttachItem,
} from "../types/whatsapp";
import "../styles/whatsapp-chat.css";

interface WhatsappSendMessageTriggerProps {
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
  attach?: WhatsappAttachItem[];
  preAddedMessages?: string;
  buttonLabel?: string;
  icon?: React.ReactNode;
  btnClassName?: string;
  modalSize?: string;
  variant?: "default" | "plain";
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  showNotification?: (title: string, message: string) => void;
  showWarning?: (title: string, message: string) => void;
  showError?: (title: string, message: string) => void;
}

/**
 * Trigger component for sending a quick WhatsApp message without chat history.
 * Uses a smaller default modal size.
 */
export const WhatsappSendMessageTrigger: React.FC<WhatsappSendMessageTriggerProps> = ({
  apiAdapter: externalApiAdapter,
  config: externalConfig,
  socketAdapter,
  baseURL,
  token,
  socketPayload,
  socketConnected,
  currentUserEmail,
  currentUserFullName,
  phone,
  refDoctype = "Contact",
  refName = "",
  links = [],
  attach,
  preAddedMessages,
  buttonLabel = "Send WhatsApp",
  icon,
  btnClassName = "",
  modalSize = "600px",
  variant = "default",
  isOpen: externalIsOpen,
  onOpen,
  onClose,
  showNotification,
  showWarning,
  showError,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;

  const { apiAdapter, config, finalSocketAdapter } = useWhatsappWidgetResolution({
    apiAdapter: externalApiAdapter,
    config: externalConfig,
    socketAdapter,
    baseURL,
    token,
    socketConnected,
    currentUserEmail,
    currentUserFullName,
    phone,
    refDoctype,
    refName,
    links,
    isChatOpen: isOpen,
    attach,
    preAddedMessages,
    showNotification,
    showWarning,
    showError,
  });

  const toggleModal = () => {
    if (externalIsOpen !== undefined) {
      if (isOpen) {
        onClose?.();
      } else {
        onOpen?.();
      }
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
  };

  if (!apiAdapter) return null;

  return (
    <>
      {variant === "plain" ? (
        <button
          className={btnClassName}
          onClick={toggleModal}
          style={{
            position: "relative",
            ...(typeof btnClassName === "string" && btnClassName.includes("button")
              ? {}
              : { border: "none", background: "none", cursor: "pointer", padding: 0 }),
          }}
        >
          {icon || buttonLabel}
        </button>
      ) : (
        <div className={`whatsapp-trigger-wrapper ${btnClassName}`} onClick={toggleModal}>
          <div className="whatsapp-trigger-icon-container">
            {icon || <WhatsAppLogo size={20} color="#175353" />}
          </div>
          <span className="whatsapp-trigger-label">{buttonLabel}</span>
        </div>
      )}

      <Modal
        open={isOpen}
        onClose={toggleModal}
        width={modalSize}
        header={<h3 style={{ margin: 0, fontSize: "1.1rem" }}>WhatsApp Chat</h3>}
      >
        <div style={{ padding: '0 4px 8px 4px' }}>
             <WhatsappSendMessage 
                apiAdapter={apiAdapter} 
                config={config} 
                socketAdapter={finalSocketAdapter} 
                socketPayload={socketPayload} 
                currentUserFullName={currentUserFullName}
                attach={attach}
                preAddedMessages={preAddedMessages}
              />
        </div>
      </Modal>
    </>
  );
};

export default WhatsappSendMessageTrigger;
