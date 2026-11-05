import React from "react";
import { Checks, Check, Clock, Warning } from "../components/common/Icons";

/**
 * Format timestamp into local HH:MM AM/PM
 */
export const formatTimeLocale = (dateStr: string): string => {
  if (!dateStr) return "";
  try {
    const date = new Date(dateStr);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  } catch (_e) {
    return "";
  }
};

/**
 * Render appropriate status icon for WhatsApp messages
 */
export const renderMessageStatusIcon = (status?: number, isOutbound?: number) => {
  if (isOutbound !== 1) return null;
  
  const iconProps = (color: string) => ({
    size: 14,
    style: { color, marginLeft: "4px" }
  });

  switch (status) {
    case 5: // Pending
      return <Clock {...iconProps("#999")} />;
    case 2: // Failed
      return <Warning {...iconProps("#ff4444")} />;
    case 1: // Sent
      return <Check {...iconProps("#999")} />;
    case 3: // Delivered
      return <Checks {...iconProps("#999")} weight="bold" />;
    case 4: // Read
      return <Checks {...iconProps("#53bdeb")} weight="bold" />;
    default:
      return <Check {...iconProps("#999")} />;
  }
};

/**
 * Parse message text and convert URLs to clickable links
 */
export const parseMessageWithLinks = (text: string): React.ReactNode => {
  if (!text) return null;

  const urlRegex = /(https?:\/\/[^\s]+|(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}(?:\/[^\s]*)?)/g;
  const parts: (string | React.ReactElement)[] = [];
  let lastIndex = 0;
  let match;
  let keyCounter = 0;

  while ((match = urlRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    const url = match[0];
    const href = url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
    parts.push(
      <a
        key={`link-${keyCounter++}`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#0066cc", textDecoration: "underline" }}
      >
        {url}
      </a>
    );

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? <React.Fragment>{parts}</React.Fragment> : text;
};

/** Map backend status string to UI status number (1 Sent, 2 Failed, 3 Delivered, 4 Read, 5 Pending). */
export function statusStringToNumber(s: string | undefined): number | undefined {
  if (!s) return undefined;
  const lower = s.toLowerCase();
  if (lower === "success" || lower === "sent") return 1;
  if (lower === "failed") return 2;
  if (lower === "delivered") return 3;
  if (lower === "read") return 4;
  const n = parseInt(s, 10);
  if (!isNaN(n) && n >= 1 && n <= 5) return n;
  return undefined;
}

/**
 * Unified transformer for both API (raw) and Socket (raw) messages.
 * Ensures internal consistency between real-time updates and historical data.
 */
import type { Message, SocketMessageDoc, MessageTemplateLink, WhatsAppMessage } from "../types/whatsapp";

export function transformToMessage(raw: SocketMessageDoc | WhatsAppMessage | any): Message | null {
  if (!raw?.name) return null;

  // Robust direction detection: socket payloads are not always normalized.
  const rawType = String(raw.type ?? "").trim().toLowerCase();
  const isOutbound =
    rawType === "outgoing" ||
    raw.is_outbound === 1 ||
    raw.is_outbound === "1";

  // 1. Status Mapping: Map backend strings to UI numbers (1 Sent, 2 Failed, 3 Delivered, 4 Read, 5 Pending)
  let status: number | undefined = statusStringToNumber(raw.status ?? undefined);
  if (status === undefined && isOutbound) status = 5; // Default to Pending for outgoing

  // 2. Template / Content Logic: Handle WhatsApp templates vs raw messages
  const isTemplate = raw.message_type === "Template";
  const rawMessage = raw.message != null ? String(raw.message) : undefined;
  const hasRealMessage =
    rawMessage != null &&
    rawMessage.trim() !== "" &&
    rawMessage !== "Template message";

  // If it's a template but message is generic placeholder, use the template text
  const displayMessage =
    isTemplate && !hasRealMessage && raw.template
      ? raw.template
      : (rawMessage ?? raw.template ?? "");

  // 3. Action Links: Process template CTA buttons
  const template_links: MessageTemplateLink[] | undefined = raw.links?.length
    ? raw.links
      .filter((l: { button_label?: string; link?: string }): l is { button_label: string; link: string } => Boolean(l?.button_label && l?.link))
      .map((l: { button_label: string; link: string }) => ({ button_label: l.button_label, link: l.link }))
    : undefined;

  // 4. Sender Resolution: Socket profile_name vs API from_name
  const fromName = (raw.from_name as string) || (raw.profile_name as string);

  return {
    name: raw.name,
    message: displayMessage,
    sender: fromName || (isOutbound ? "You" : "Customer"),
    creation: raw.creation ?? new Date().toISOString(),
    is_outbound: isOutbound ? 1 : 0,
    attach: Array.isArray(raw.attach) ? raw.attach : (raw.attach ?? undefined),
    content_type: raw.content_type ?? undefined,
    status,
    header: isTemplate ? (raw.header ?? undefined) : undefined,
    footer: isTemplate ? (raw.footer ?? undefined) : undefined,
    template_links: template_links?.length ? template_links : undefined,
    from: raw.from || raw.sender || null,
    reference_name: raw.reference_name || raw.customer || null,
    message_type: raw.message_type,
    header_type: isTemplate ? (raw.header_type ?? undefined) : undefined,
    sample: isTemplate ? (raw.sample ?? undefined) : undefined,
  };
}
