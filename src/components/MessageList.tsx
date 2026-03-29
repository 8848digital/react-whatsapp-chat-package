"use client";
import React, { useRef, useEffect, useMemo } from "react";
import type { Message, MessageListProps } from "../types/whatsapp";
import { formatTimeLocale, renderMessageStatusIcon, parseMessageWithLinks } from "../utils/whatsapp";
import { TemplateMessageCard } from "./TemplateMessageCard";
import { useWhatsappChatConfig } from "../context/WhatsappChatContext";
import WhatsAppMessageSkeleton from "./skeleton/WhatsAppMessageSkeleton";

/** Map activity status (string | number) to Message.status 1–5. */
function mapActivityStatusToNumber(status: string | number | undefined, isOutbound: boolean): number | undefined {
  if (status == null || status === "") return isOutbound ? 5 : undefined;
  if (typeof status === "number" && status >= 1 && status <= 5) return status;
  if (typeof status === "string") {
    const s = status.toLowerCase();
    if (s === "success" || s === "sent") return 1;
    if (s === "failed") return 2;
    if (s === "delivered") return 3;
    if (s === "read") return 4;
    if (s === "pending") return 5;
    const n = parseInt(status, 10);
    if (!isNaN(n) && n >= 1 && n <= 5) return n;
  }
  return isOutbound ? 5 : undefined;
}

export const MessageList = ({
  messages,
  isLoading = false,
  error = null,
  activity,
  icon,
  showIcon = false,
  enableScroll = true,
}: MessageListProps) => {
  const { config } = useWhatsappChatConfig();
  const apiBaseUrl = config.apiBaseUrl || "";
  const bottomRef = useRef<HTMLDivElement>(null);

  const transformedMessages: Message[] = useMemo(() => {
    if (activity) {
      const creation =
        activity.creation || (activity.date && activity.time ? `${activity.date} ${activity.time}` : new Date().toISOString());
      const isOutbound = activity.type === "Outgoing" || activity.is_outbound === 1;
      const template_links =
        activity.links?.map((item) => ({
          button_label: item.button_label ?? "",
          link: item.link ?? item.website_url ?? "",
        })) ?? undefined;
      return [
        {
          name: activity.name || `activity-${creation}`,
          message: activity.message || "",
          sender: activity.type === "Outgoing" ? "You" : "Customer",
          creation: creation,
          is_outbound: isOutbound ? 1 : 0,
          attach: activity.attach,
          content_type: activity.content_type,
          status: mapActivityStatusToNumber(activity.status, isOutbound),
          message_type: activity.message_type,
          header: activity.header,
          footer: activity.footer,
          template_links: template_links?.filter((t) => t.link || t.button_label).length ? template_links : undefined,
          header_type: activity.header_type,
          sample: activity.sample,
        },
      ];
    }
    return messages || [];
  }, [activity, messages]);

  useEffect(() => {
    if (enableScroll) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [transformedMessages, enableScroll]);

  if (isLoading) {
    return <WhatsAppMessageSkeleton />;
  }

  if (error) {
    return (
      <div className="whatsapp-message-list" style={{ textAlign: "center", color: "#c53030", padding: "20px" }}>
        {error}
      </div>
    );
  }

  return (
    <div className="whatsapp-message-list">
      {transformedMessages.length === 0 && (
        <div style={{ textAlign: "center", color: "#888", padding: "20px" }}>No messages yet. Start the conversation!</div>
      )}
      {transformedMessages.map((msg, index) => {
        const m = msg;
        const attachList = Array.isArray(m.attach) ? m.attach : m.attach ? [m.attach] : [];
        const contentType = m.content_type;
        const isTemplateCard = m.message_type === "Template";

        if (isTemplateCard) {
          return (
            <div
              key={`${msg.name}-${index}`}
              className={`message-bubble ${msg.is_outbound ? "sent" : "received"} message-bubble--template`}
            >
              {showIcon && icon && <div className="message-icon-wrapper">{icon}</div>}
              <TemplateMessageCard
                header={m.header}
                message={msg.message}
                footer={m.footer}
                template_links={m.template_links}
                creation={msg.creation}
                is_outbound={msg.is_outbound}
                status={msg.status}
                header_type={m.header_type}
                sample={m.sample}
              />
            </div>
          );
        }

        return (
          <div key={`${msg.name}-${index}`} className={`message-bubble ${msg.is_outbound ? "sent" : "received"}`}>
            {showIcon && icon && <div className="message-icon-wrapper">{icon}</div>}
            <div className="message-content">
              {parseMessageWithLinks(msg.message) || msg.message}
              {attachList.length > 0 &&
                attachList.map((attach, attachIndex) => (
                  <div className="message-attachment" key={`${msg.name}-attach-${attachIndex}`}>
                    {contentType === "image" ? (
                      <img
                        src={`${apiBaseUrl}/${attach}`}
                        alt="attachment"
                        className="message-attachment-image"
                        style={{ maxWidth: "200px", borderRadius: "4px" }}
                      />
                    ) : (
                      <a
                        href={`${apiBaseUrl}/${attach}`}
                        target="_blank"
                        rel="noreferrer"
                        className="message-attachment-link"
                        title="View attachment"
                      >
                        {attach.split("/").pop() || "Attachment"}
                      </a>
                    )}
                  </div>
                ))}
              <div className="message-time">
                {formatTimeLocale(msg.creation)}
                {renderMessageStatusIcon(msg.status, msg.is_outbound)}
              </div>
            </div>
          </div>
        );
      })}
      <div ref={bottomRef} />
    </div>
  );
};
