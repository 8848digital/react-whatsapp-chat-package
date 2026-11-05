import { default as React } from 'react';
import { Message, SocketMessageDoc, WhatsAppMessage } from '../types/whatsapp';
/**
 * Format timestamp into local HH:MM AM/PM
 */
export declare const formatTimeLocale: (dateStr: string) => string;
/**
 * Render appropriate status icon for WhatsApp messages
 */
export declare const renderMessageStatusIcon: (status?: number, isOutbound?: number) => import("react/jsx-runtime").JSX.Element | null;
/**
 * Parse message text and convert URLs to clickable links
 */
export declare const parseMessageWithLinks: (text: string) => React.ReactNode;
/** Map backend status string to UI status number (1 Sent, 2 Failed, 3 Delivered, 4 Read, 5 Pending). */
export declare function statusStringToNumber(s: string | undefined): number | undefined;
export declare function transformToMessage(raw: SocketMessageDoc | WhatsAppMessage | any): Message | null;
