# React WhatsApp Chat Package 💬

## 🚀 Key Features

- **Decoupled Architecture**: Logic is separated from UI for maximum flexibility.
- **Easy Integration**: Built-in Frappe-compatible logic with simple props (`baseURL`, `token`, etc.).
- **Real-Time Ready**: Plug-and-play support for Socket.io via message event passing.
- **Rich Media Support**: Handles images, videos, documents, and interactive templates.
- **Skeleton Support**: Premium loading skeletons for messages and templates.
- **Isolated State**: Uses an isolated Zustand store per widget instance—safely render multiple widgets on one page.
- **Notification Slots**: Easily connect to your application's toast/notification system.
- **Optimistic UI**: Instant UI updates when sending messages for a premium feel.

## 🛠️ Installation

````bash
# If using Git installation
npm install https://github.com/8848digital/react-whatsapp-chat-package.git
## 📋 Usage

### 1. Standard Usage (Direct API Integration)

The easiest way to integrate. The package handles all API calls internally using the provided `baseURL` and `token`.

```tsx
import { WhatsappChatTrigger } from "react-whatsapp-chat-package";
import "react-whatsapp-chat-package/styles.css";

const MyComponent = () => {
  return (
    <WhatsappChatTrigger
      buttonLabel="WhatsApp"
      baseURL="https://your-api.com"
      token="your-auth-token"
      phone="1234567890" // Recipient
      currentUserEmail="user@me.com" // Your email (for unread counts)
      refName="Contact-001" // Record ID
      refDoctype="Contact" // Record Type
      // Connect to your app's toast system
      showNotification={(title, msg) => toast.success(msg)}
      showError={(title, msg) => toast.error(msg)}
    />
  );
};
````

### 2. Embedded Mode (Direct Component Usage)

If you already have your own modal or want to embed the chat directly into a sidebar/page, use the `WhatsappChat` component.

```tsx
import { WhatsappChat } from "react-whatsapp-chat-package";

const SidePanel = () => {
  return (
    <div style={{ height: "600px", border: "1px solid #ddd" }}>
      <WhatsappChat baseURL="https://api.com" token="xyz" phone="1234567890" refName="Contact-001" />
    </div>
  );
};
```

### 3. Send-Only Mode (No History)

For cases where you only need to send a quick message or template without showing the full chat history, use the `SendMessage` variant. This is more compact and does not fetch previous messages.

```tsx
import { WhatsappSendMessageTrigger } from "react-whatsapp-chat-package";

const QuickAction = () => {
  return (
    <WhatsappSendMessageTrigger
      buttonLabel="Quick Msg"
      baseURL="..."
      token="..."
      phone="1234567890"
      currentUserFullName="John Doe"
      showNotification={(t, m) => toast.info(m)}
    />
  );
};
```

#### Embedded Send-Only Component

If you want to use the send-only interface without a trigger button:

```tsx
import { WhatsappSendMessage } from "react-whatsapp-chat-package";

const FastReplyPanel = () => {
  return (
    <div style={{ padding: "1rem", border: "1px solid #ddd" }}>
      <WhatsappSendMessage baseURL="https://api.com" token="xyz" phone="1234567890" currentUserFullName="Support Team" />
    </div>
  );
};
```

#### Key differences for Send-Only:

- **No History**: Skips the initial history fetch and does not render the message list.
- **Compact UI**: The modal defaults to `600px` width and `auto` height (shrinks to fit).
- **Display Name**: Supports `currentUserFullName` to show your identity in the header.

## 🛠 Props & Configuration

### `WhatsappChatTrigger` / `WhatsappSendMessageTrigger` Props

The Trigger component includes everything in the `WhatsappChat` props, plus:

| Prop              | Type                   | Default      | Description                                                  |
| ----------------- | ---------------------- | ------------ | ------------------------------------------------------------ |
| `buttonLabel`     | `string`               | `"WhatsApp"` | Trigger button text.                                         |
| `icon`            | `ReactNode`            | Optional     | Custom icon to show inside/instead of the button.            |
| `btnClassName`    | `string`               | `""`         | Additional CSS class for the button/trigger wrapper.         |
| `variant`         | `"default" \| "plain"` | `"default"`  | Use "plain" for a minimalist button without the wrapper box. |
| `modalSize`       | `string`               | `"1024px"`   | Chat modal width (e.g. "800px", "50%").                      |
| **Modal Control** |                        |              |                                                              |
| `isOpen`          | `boolean`              | Internal     | Controlled state for the modal visibility.                   |
| `onOpen`          | `() => void`           | Optional     | Fired when the trigger button is clicked to open the modal.  |
| `onClose`         | `() => void`           | Optional     | Fired when the modal's close button is clicked.              |

### `WhatsappChat` / Shared Props

These props are available on **`WhatsappChat`**, **`WhatsappChatTrigger`**, **`WhatsappSendMessage`**, and **`WhatsappSendMessageTrigger`** (same underlying `config`).

| Prop                      | Type                 | Default     | Description                                                                                                                                                                                                                                             |
| ------------------------- | -------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Connection Settings**   |                      |             |                                                                                                                                                                                                                                                         |
| `baseURL`                 | `string`             | Optional    | API Base URL.                                                                                                                                                                                                                                           |
| `token`                   | `string`             | Optional    | Auth token for API calls.                                                                                                                                                                                                                               |
| **Metadata**              |                      |             |                                                                                                                                                                                                                                                         |
| `phone`                   | `string`             | Optional    | The recipient's phone number.                                                                                                                                                                                                                           |
| `refName`                 | `string`             | `""`        | Primary record ID (e.g. "Contact-001").                                                                                                                                                                                                                 |
| `refDoctype`              | `string`             | `"Contact"` | Primary record type.                                                                                                                                                                                                                                    |
| `currentUserEmail`        | `string`             | Optional    | Your identity (required for unread badge logic).                                                                                                                                                                                                        |
| `currentUserFullName`     | `string`             | Optional    | Display name used in headers and templates.                                                                                                                                                                                                             |
| `links`                   | `WhatsappChatLink[]` | `[]`        | Secondary linked documents to track communication against.                                                                                                                                                                                              |
| **Real-Time Integration** |                      |             |                                                                                                                                                                                                                                                         |
| `socketPayload`           | `SocketPayload`      | Optional    | Raw socket event from your host app to trigger unread counts.                                                                                                                                                                                           |
| `socketConnected`         | `boolean`            | Optional    | Manual override for socket connection status.                                                                                                                                                                                                           |
| **Composer presets**      |                      |             |                                                                                                                                                                                                                                                         |
| `attach`                  | `{ file: string }[]` | Optional    | Server file paths already uploaded; merged into the send payload `attach` when the user sends. Shown as pre-filled attachments when the chat opens. Uses `apiBaseUrl` for image previews when set.                                                      |
| `preAddedMessages`        | `string`             | Optional    | Initial text in the message input when the chat opens. On modal **reopen**, the composer resets and this text is applied again. Embedded (non-modal) usage: prefilled on first mount; change the component `key` to reset the text if the prop updates. |
| **Notifications**         |                      |             |                                                                                                                                                                                                                                                         |
| `showNotification`        | `Function`           | Optional    | Callback for success alerts.                                                                                                                                                                                                                            |
| `showWarning`             | `Function`           | Optional    | Callback for warning alerts.                                                                                                                                                                                                                            |
| `showError`               | `Function`           | Optional    | Callback for error alerts.                                                                                                                                                                                                                              |

You can also pass `attach` and `preAddedMessages` on a custom `config` object (`WhatsappWidgetConfig`); top-level props with the same names override those fields when both are used.

### Example: prefilled attachments and message

```tsx
<WhatsappChatTrigger
  buttonLabel="WhatsApp"
  baseURL="https://your-api.com"
  token="your-auth-token"
  phone="1234567890"
  currentUserEmail="user@me.com"
  refName="Contact-001"
  attach={[{ file: "/files/image.png" }, { file: "/private/files/doc.pdf" }]}
  preAddedMessages="Hello, following up on your request."
  showNotification={(title, msg) => toast.success(msg)}
/>
```

## 🧩 Adapter Implementation (Advanced)

For advanced use cases where you want to control exactly how the widget interacts with your backend—such as using **React Query** for caching, custom **Socket.io** event handling, or centralized notification management—you can implement custom adapters.

The following snippet demonstrates a robust implementation using the adapter pattern:

```typescript
"use client";

import React, { useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useSocket, type SocketMessage } from "@/hooks/useSocket";
import { useSendWhatsAppMessage, useSendWhatsAppTemplate, useUploadFile, useSendReadReceipt } from "@/hooks/whatsapp/useWhatsappHooks";
import { useNotification } from "@/components/common/NotificationProvider";

import { API_BASE_URL } from "@/services/config/apiClient";
import type { SendWhatsAppMessagePayload, SendWhatsAppTemplatePayload, WhatsAppMessage } from "@/services/api/whatsapp/whatsapp.api";
import { getWhatsAppMessages, getWhatsAppTemplates, getIncomingCommunications } from "@/services/api/whatsapp/whatsapp.api";

import type {
  Message,
  MessageTemplateLink,
  SocketMessageDoc,
  WhatsappWidgetApiAdapter,
  WhatsappWidgetConfig,
  SocketAdapter,
  TemplateListReference,
} from "react-whatsapp-chat-package";

export interface UseWhatsappChatAdaptersParams {
  referenceDoctype: string;
  referenceName: string;
  toPhone: string;
  currentUserEmail?: string;
  contextDoctype?: string;
  contextName?: string;
  links?: Array<{ link_doctype: string; link_name: string }>;
  isChatOpen?: boolean;
}

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
 * Unified transformer for both API (WhatsAppMessage) and Socket (SocketMessageDoc) messages.
 */
export function transformToMessage(raw: WhatsAppMessage | SocketMessageDoc): Message | null {
  if (!raw?.name) return null;

  const rawType = String(raw.type ?? "")
    .trim()
    .toLowerCase();
  const isOutbound =
    rawType === "outgoing" ||
    (raw as unknown as { is_outbound?: number | string }).is_outbound === 1 ||
    (raw as unknown as { is_outbound?: number | string }).is_outbound === "1";

  let status: number | undefined = statusStringToNumber(raw.status ?? undefined);
  if (status === undefined && isOutbound) status = 5;

  const isTemplate = raw.message_type === "Template";
  const rawMessage = raw.message != null ? String(raw.message) : undefined;
  const hasRealMessage = rawMessage != null && rawMessage.trim() !== "" && rawMessage !== "Template message";

  const displayMessage = isTemplate && !hasRealMessage && raw.template ? raw.template : (rawMessage ?? raw.template ?? "");

  const template_links: MessageTemplateLink[] | undefined = raw.links?.length
    ? raw.links
        .filter((l): l is { button_label: string; link: string } => Boolean(l?.button_label && l?.link))
        .map((l) => ({ button_label: l.button_label, link: l.link }))
    : undefined;

  const fromName = (raw as WhatsAppMessage).from_name || (raw as SocketMessageDoc).profile_name;

  return {
    name: raw.name,
    message: displayMessage,
    sender: fromName || (isOutbound ? "You" : "Customer"),
    creation: raw.creation ?? new Date().toISOString(),
    is_outbound: isOutbound ? 1 : 0,
    attach: raw.attach ?? undefined,
    content_type: raw.content_type ?? undefined,
    status,
    header: isTemplate ? (raw.header ?? undefined) : undefined,
    footer: isTemplate ? (raw.footer ?? undefined) : undefined,
    template_links: template_links?.length ? template_links : undefined,
    message_type: raw.message_type,
    header_type: isTemplate ? (raw.header_type ?? undefined) : undefined,
    sample: isTemplate ? (raw.sample ?? undefined) : undefined,
    from: (raw as SocketMessageDoc).from ?? (raw as WhatsAppMessage).from ?? null,
    reference_name: (raw as SocketMessageDoc).reference_name ?? (raw as WhatsAppMessage).reference_name ?? null,
  };
}

/**
 * Shared hook to initialize WhatsApp adapters and config.
 */
export function useWhatsappChatAdapters({
  referenceDoctype,
  referenceName,
  toPhone,
  currentUserEmail,
  contextDoctype,
  contextName,
  links,
  isChatOpen = false,
}: UseWhatsappChatAdaptersParams) {
  const queryClient = useQueryClient();
  const currentUser = currentUserEmail ?? "";
  const activeLeadName = contextName;
  const activeLeadDoctype = contextDoctype;

  const { showSuccess } = useNotification();

  const sendWhatsAppMessageMutation = useSendWhatsAppMessage();
  const sendWhatsAppTemplateMutation = useSendWhatsAppTemplate();
  const uploadFileMutation = useUploadFile();
  const sendReadReceiptMutation = useSendReadReceipt();

  const messageListeners = React.useRef<Set<(msg: Message) => void>>(new Set());
  const handleSocketMessage = React.useCallback((data: SocketMessage) => {
    if (data.event !== "whatsapp_message") return;
    const doc = data.message as SocketMessageDoc;
    const transformed = transformToMessage(doc);
    if (transformed) {
      messageListeners.current.forEach((cb) => cb(transformed));
    }
  }, []);

  const { isConnected } = useSocket(handleSocketMessage, { onlyEvents: ["whatsapp_message"] });

  const socketAdapter: SocketAdapter = useMemo(
    () => ({
      isConnected,
      onMessage: (cb: (msg: Message) => void) => {
        messageListeners.current.add(cb);
      },
      offMessage: (cb: (msg: Message) => void) => {
        messageListeners.current.delete(cb);
      },
    }),
    [isConnected]
  );

  const config: WhatsappWidgetConfig = useMemo(
    () => ({
      currentUser,
      activeLeadName,
      activeLeadDoctype,
      doctype: referenceDoctype ?? "Contact",
      refName: referenceName ?? "",
      phone: toPhone ?? "",
      links,
      isChatOpen: !!isChatOpen,
      apiBaseUrl: API_BASE_URL,
    }),
    [currentUser, activeLeadName, activeLeadDoctype, referenceDoctype, referenceName, toPhone, links, isChatOpen]
  );

  const apiAdapter: WhatsappWidgetApiAdapter = useMemo(
    () => ({
      getMessages: async (doctype: string, name: string) => {
        const res = await queryClient.fetchQuery({
          queryKey: ["whatsapp-messages", doctype, name],
          queryFn: () => getWhatsAppMessages({ reference_doctype: doctype, reference_name: name }),
          staleTime: 0,
        });
        const msgs = res.message || [];
        return msgs.map(transformToMessage).filter((m): m is Message => !!m);
      },
      sendMessage: async (payload) => {
        const res = await sendWhatsAppMessageMutation.mutateAsync(payload);
        return { name: res?.name };
      },
      sendTemplate: async (payload) => {
        return sendWhatsAppTemplateMutation.mutateAsync(payload);
      },
      getTemplates: async (refs: TemplateListReference[]) => {
        const res = await queryClient.fetchQuery({
          queryKey: ["whatsappTemplates", refs],
          queryFn: () =>
            getWhatsAppTemplates(
              refs.map((r) => ({
                reference_doctype: r.reference_doctype,
                reference_name: r.reference_name,
              }))
            ),
          staleTime: 0,
        });
        return res.message?.data || [];
      },
      uploadFile: async (file: File) => {
        const res = await uploadFileMutation.mutateAsync(file);
        const uploadRes = res as unknown as { message?: { file_url: string } };
        return { file_url: uploadRes.message?.file_url || "" };
      },
      sendReadReceipt: async (messageName: string) => {
        await sendReadReceiptMutation.mutateAsync({ name: messageName });
      },
      getUnreadCount: async () => {
        if (!currentUser) return 0;
        try {
          const res = await queryClient.fetchQuery({
            queryKey: ["incomingCommunication", currentUser],
            queryFn: () => getIncomingCommunications(currentUser),
            staleTime: 0,
          });
          const data = res.message?.data || [];
          const count = data.find((c) => c.type === "whatsapp" && (c.from === toPhone || c.customer === referenceName))?.counts ?? 0;
          return count;
        } catch {
          return 0;
        }
      },
      onMessageSent: () => {
        queryClient.invalidateQueries({ queryKey: ["incomingCommunication", currentUser] });
        setTimeout(() => {
          messageListeners.current.forEach((cb) =>
            cb({
              name: `sys-${Date.now()}`,
              is_outbound: 1,
              message: "",
              sender: currentUser,
              creation: new Date().toISOString(),
            } as Message)
          );
        }, 1000);
      },
      showNotification: (title: string, message: string) => {
        if (!isChatOpen) {
          showSuccess(title, message);
        }
      },
    }),
    [
      sendWhatsAppMessageMutation,
      sendWhatsAppTemplateMutation,
      uploadFileMutation,
      sendReadReceiptMutation,
      queryClient,
      currentUser,
      toPhone,
      referenceName,
      showSuccess,
      isChatOpen,
    ]
  );

  return {
    config,
    apiAdapter,
    socketAdapter,
  };
}
```

### Implementation Example

Once you have your hook ready, you simply pass the `config`, `apiAdapter`, and `socketAdapter` down to the widget components:

```tsx
import React from "react";
import { useWhatsappChatAdapters } from "./hooks/useWhatsappChatAdapters"; // Your custom hook
import { WhatsappChat } from "react-whatsapp-chat-package";
import "react-whatsapp-chat-package/styles.css";

const MyChatWidget = ({ phone, refName, refDoctype }) => {
  const { config, apiAdapter, socketAdapter } = useWhatsappChatAdapters({
    referenceDoctype: refDoctype,
    referenceName: refName,
    toPhone: phone,
    isChatOpen: true, // or control via state
  });

  return (
    <div style={{ height: "600px" }}>
      <WhatsappChat config={config} apiAdapter={apiAdapter} socketAdapter={socketAdapter} />
    </div>
  );
};
```

The package is UI-agnostic regarding notifications. Instead of bundling a toast library, it provides "slots" for you to connect your own application's alert system.

The following props follow the signature: `(title: string, message: string) => void`.

- **`showNotification`**: Called on successful message send or template selection.
- **`showWarning`**: Called for validation errors or "Upload in Progress" states.
- **`showError`**: Called for API or server-side failures.

### Example with custom handlers

```tsx
<WhatsappChatTrigger
  {...props}
  showNotification={(title, message) => myToast.show({ title, body: message, type: "success" })}
  showError={(title, message) => myToast.show({ title, body: message, type: "error" })}
/>
```

## 🔌 Socket Implementation Example

To use the **Socket Bridge**, your application's `useSocket` hook should be structured to handle the standard widget `SocketMessage` format. Here is a concise example of how to implement it:

```tsx
// your-app/hooks/useSocket.ts
import { useEffect, useRef } from "react";
import { Socket, io } from "socket.io-client";

export interface SocketMessage {
  event: string;
  message?: any;
}

export const useSocket = (onMessage: (data: SocketMessage) => void) => {
  const onMessageRef = useRef(onMessage);

  // Keep the handler ref up to date
  useEffect(() => {
    onMessageRef.current = onMessage;
  }, [onMessage]);

  useEffect(() => {
    // Note: Reconnection and transports are key for a stable connection
    const socket = io("YOUR_SOCKET_URL", {
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 2000,
      transports: ["websocket", "polling"],
      extraHeaders: {
        Authorization: `token ${YOUR_TOKEN}`,
      },
    });

    // Standard event listener
    socket.onAny((eventName, data) => {
      onMessageRef.current({
        event: eventName,
        message: data,
      });
    });

    return () => {
      socket.disconnect();
    };
  }, []);
};
```

## 🎨 Styling

Import the styles in your main entry point (App.tsx or layout.tsx):

```javascript
import "react-whatsapp-chat-package/styles.css";
```

## 📦 Building for Production

```bash
cd react-whatsapp-chat-package
npm run build
```

## 📄 License

MIT
