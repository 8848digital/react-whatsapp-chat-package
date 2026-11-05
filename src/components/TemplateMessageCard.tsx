"use client";
import React from "react";
import type { TemplateMessageCardProps, MessageTemplateLink } from "../types/whatsapp";
import { formatTimeLocale, renderMessageStatusIcon } from "../utils/whatsapp";
import { ArrowSquareOut, FileText } from "./common/Icons";
import { useWhatsappChatConfig } from "../context/WhatsappChatContext";

function normalizePath(path: string): string {
  return path.startsWith("/") ? path.slice(1) : path;
}

export const TemplateMessageCard = ({
  header,
  message,
  footer,
  template_links,
  creation,
  is_outbound,
  status,
  header_type,
  sample,
  isPreview = false,
}: TemplateMessageCardProps) => {
  const { config } = useWhatsappChatConfig();
  const apiBaseUrl = config.apiBaseUrl || "";

  const sampleUrl = sample ? `${apiBaseUrl}/${normalizePath(sample)}` : undefined;
  const isImageHeader = header_type === "IMAGE" && sampleUrl;
  const isDocumentHeader = header_type === "DOCUMENT" && sampleUrl;
  const isTextHeader = !header_type || header_type === "TEXT";

  return (
    <div className="whatsapp-template-message-card">
      <div className="whatsapp-template-card-inner">
        {isImageHeader && (
          <a
            href={sampleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-template-card-header-media whatsapp-template-card-header-image"
            title="Open image in new tab"
          >
            <img
              src={sampleUrl}
              alt="Template header"
              className="whatsapp-template-card-image"
            />
          </a>
        )}
        {isDocumentHeader && (
          <a
            href={sampleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-template-card-header-media whatsapp-template-card-header-document"
            title="Open document in new tab"
          >
            <FileText size={24} color="#e74c3c" />
            <span>{sample?.split("/").pop() || "Untitled"}</span>
          </a>
        )}
        {isTextHeader && header && <h4 className="whatsapp-template-card-header">{header}</h4>}
        <p className="whatsapp-template-card-body">{message}</p>
        {footer && <p className="whatsapp-template-card-footer">{footer}</p>}
        {template_links && template_links.length > 0 && (
          <div className="whatsapp-template-card-buttons">
            {template_links.map((link: MessageTemplateLink, idx: number) => (
              <a key={idx} href={link.link} target="_blank" rel="noopener noreferrer" className="whatsapp-template-card-button">
                <ArrowSquareOut size={16} color="currentColor" />
                <span>{link.button_label}</span>
              </a>
            ))}
          </div>
        )}
        <div className="whatsapp-template-card-meta">
          <span>{formatTimeLocale(creation)}</span>
          {!isPreview && is_outbound === 1 && renderMessageStatusIcon(status, is_outbound)}
        </div>
      </div>
    </div>
  );
};
