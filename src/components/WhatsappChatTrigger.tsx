"use client";

import React, { useState } from "react";
import { WhatsappChat } from "./WhatsappChat";
import Modal from "./common/Modal";
import { WhatsAppLogo } from "./common/Icons";
import { useWhatsappBadgeCount } from "../hooks/useWhatsappBadgeCount";
import { useWhatsappWidgetResolution } from "../hooks/useWhatsappWidgetResolution";
import type { WhatsappWidgetApiAdapter, WhatsappWidgetConfig, SocketAdapter, WhatsappChatLink, SocketPayload } from "../types/whatsapp";
import "../styles/whatsapp-chat.css";

interface WhatsappChatTriggerProps {
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
  currentUserFullName?: string;
  phone?: string;
  refDoctype?: string;
  refName?: string | null;
  links?: WhatsappChatLink[];

  // --- UI Props ---
  buttonLabel?: string;
  icon?: React.ReactNode;
  btnClassName?: string;
  modalSize?: string;
  variant?: "default" | "plain";

  // --- External Control (Optional) ---
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;

  // --- Notification Sync (Matches Email Component) ---
  showNotification?: (title: string, message: string) => void;
  showWarning?: (title: string, message: string) => void;
  showError?: (title: string, message: string) => void;
}

/**
 * All-in-One Component: Button with unread badge + Internal Modal management.
 */
export const WhatsappChatTrigger: React.FC<WhatsappChatTriggerProps> = ({
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
  buttonLabel,
  icon,
  btnClassName = "",
  modalSize = "1024px",
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
    showNotification,
    showWarning,
    showError,
  });

  const unreadCount = useWhatsappBadgeCount(apiAdapter!, finalSocketAdapter, socketPayload, phone, refName || undefined, isOpen, config?.currentUser);

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
          {unreadCount > 0 && (
            <span className="whatsapp-trigger-badge" style={{ top: "-10px", right: "-10px" }}>
              {unreadCount}
            </span>
          )}
        </button>
      ) : (
        <div className={`whatsapp-trigger-wrapper ${btnClassName}`} onClick={toggleModal}>
          <div className="whatsapp-trigger-icon-container">
            {icon || <WhatsAppLogo size={20} color="#175353" />}
            {unreadCount > 0 && <span className="whatsapp-trigger-badge">{unreadCount}</span>}
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
        <WhatsappChat 
          apiAdapter={apiAdapter} 
          config={config} 
          socketAdapter={finalSocketAdapter} 
          socketPayload={socketPayload} 
          currentUserFullName={currentUserFullName}
        />
      </Modal>
    </>
  );
};

export default WhatsappChatTrigger;
