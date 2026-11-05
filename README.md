# React WhatsApp Chat Package 💬

A WhatsApp chat widget for React. It shows a contact's message history, sends text, attachments and approved WhatsApp templates, tracks unread counts, and receives live updates over Socket.io.

It works out of the box with the 8848 Digital Frappe backend (`crm_integration` app). You can also plug in your own API and socket layer through adapters.

- **Package:** `react-whatsapp-chat-package` (current version **1.0.19**)
- **React:** 19 (see [Compatibility](#-compatibility))
- **License:** MIT

---

## Table of contents

1. [Features](#-features)
2. [Installation](#-installation)
3. [Quick start](#-quick-start)
4. [Components](#-components)
5. [Props reference](#-props-reference)
6. [How references and links are chosen](#-how-references-and-links-are-chosen)
7. [Templates](#-templates)
8. [Attachments](#-attachments)
9. [Real-time updates (sockets)](#-real-time-updates-sockets)
10. [Read receipts and unread badges](#-read-receipts-and-unread-badges)
11. [Notifications](#-notifications)
12. [Advanced: custom adapters](#-advanced-custom-adapters)
13. [Hooks and low-level exports](#-hooks-and-low-level-exports)
14. [TypeScript types](#-typescript-types)
15. [Backend API contract](#-backend-api-contract)
16. [Styling](#-styling)
17. [Compatibility](#-compatibility)
18. [Known limitations](#-known-limitations)
19. [Development](#-development)
20. [Changelog](#-changelog)

---

## 🚀 Features

- **Four ready-made components:** a full chat in a modal, an embeddable chat, a send-only composer, and a send-only composer in a modal.
- **Two integration modes:**
  - **Internal mode:** pass `baseURL` and `token`, and the widget calls the Frappe API itself.
  - **Adapter mode:** pass your own `apiAdapter` and `socketAdapter`, for example backed by React Query.
- **WhatsApp templates:** a template picker, a preview, and send through `send_whatsapp_template`. The record the template is rendered against follows the template's `for_doctype` (Lead, Task, Contact or a linked record).
- **Rich messages:** template cards with header text, image or document, footer and CTA buttons. Image and file attachments. URLs in message text become clickable links.
- **Optimistic UI:** a sent message appears at once as "pending" and is swapped for the server copy when its socket event arrives.
- **Unread badges:** the trigger button shows the unread count for the contact. One shared store keeps several triggers on a page in sync.
- **Read receipts:** the latest unread incoming message is marked read when the chat opens, and new incoming messages are marked read while it stays open.
- **Isolated state:** every widget instance has its own Zustand store, so several chats can be open on one page.
- **Loading skeletons** for messages and templates.
- **Safe rendering:** message and template text is rendered as React text. There is no `dangerouslySetInnerHTML`.

---

## 🛠️ Installation

```bash
npm install react-whatsapp-chat-package
```

Or straight from GitHub:

```bash
npm install https://github.com/8848digital/react-whatsapp-chat-package.git
```

The host application must provide these **peer dependencies**:

| Package     | Version            |
| ----------- | ------------------ |
| `react`     | `^19` (see note)   |
| `react-dom` | `^19`              |

`axios`, `zustand` and `@phosphor-icons/react` are regular dependencies and are installed for you.

Import the stylesheet once, for example in `layout.tsx` or `App.tsx`:

```ts
import "react-whatsapp-chat-package/styles.css";
```

---

## ⚡ Quick start

```tsx
"use client";
import { WhatsappChatTrigger } from "react-whatsapp-chat-package";
import "react-whatsapp-chat-package/styles.css";

export function ContactWhatsAppButton() {
  return (
    <WhatsappChatTrigger
      buttonLabel="WhatsApp"
      baseURL="https://crm.example.com"   // Frappe site
      token="api_key:api_secret"          // sent as "Authorization: token <token>"
      currentUserEmail="agent@example.com" // needed for unread badges
      phone="919876543210"                 // recipient
      refDoctype="Contact"
      refName="CONT-0001"
      showNotification={(title, msg) => toast.success(msg)}
      showError={(title, msg) => toast.error(msg)}
    />
  );
}
```

That's enough for history, sending, templates, attachments and badges. Live updates need one more prop; see [Real-time updates](#-real-time-updates-sockets).

> **Next.js App Router:** the published bundle has no `"use client"` directive. Import the package from a file marked `"use client"`.

---

## 🧩 Components

| Component                    | What it renders                                                   | History | Unread badge |
| ---------------------------- | ----------------------------------------------------------------- | ------- | ------------ |
| `WhatsappChatTrigger`        | A button with an unread badge. Clicking it opens the full chat in a modal. | ✅ | ✅ |
| `WhatsappChat`               | The full chat (header, message list, composer) for embedding in your own layout. | ✅ | ❌ |
| `WhatsappSendMessageTrigger` | A button that opens a compact send-only composer in a modal.      | ❌      | ❌           |
| `WhatsappSendMessage`        | The send-only composer for embedding.                             | ❌      | ❌           |

### 1. Chat in a modal: `WhatsappChatTrigger`

See [Quick start](#-quick-start). The modal is uncontrolled by default. To control it from outside, pass `isOpen`, `onOpen` and `onClose`:

```tsx
const [open, setOpen] = useState(false);

<WhatsappChatTrigger
  {...connectionProps}
  isOpen={open}
  onOpen={() => setOpen(true)}
  onClose={() => setOpen(false)}
/>;
```

The chat is mounted only while the modal is open. Each time it opens, it reloads history, rebuilds the composer (re-applying `preAddedMessages` and `attach`) and re-reads templates.

### 2. Embedded chat: `WhatsappChat`

```tsx
import { WhatsappChat } from "react-whatsapp-chat-package";

<div style={{ height: 600 }}>
  <WhatsappChat
    baseURL="https://crm.example.com"
    token="api_key:api_secret"
    phone="919876543210"
    refDoctype="Contact"
    refName="CONT-0001"
  />
</div>;
```

`WhatsappChat` treats itself as open for as long as it is mounted: it loads history on mount and sends read receipts for incoming messages. To route templates by lead or task, pass `activeLeadName` and the other active-record fields inside a [`config`](#config-object) object. They are not top-level props on this component.

### 3. Send-only: `WhatsappSendMessageTrigger` / `WhatsappSendMessage`

Send-only mode doesn't fetch or show history. Use it for "quick message" actions.

```tsx
import { WhatsappSendMessageTrigger, WhatsappSendMessage } from "react-whatsapp-chat-package";

<WhatsappSendMessageTrigger
  buttonLabel="Quick message"
  baseURL="https://crm.example.com"
  token="api_key:api_secret"
  phone="919876543210"
  refName="CONT-0001"
  currentUserFullName="Support Team"
  preAddedMessages="Hi! Following up on your enquiry."
/>;

// or embedded
<WhatsappSendMessage baseURL="…" token="…" phone="919876543210" refName="CONT-0001" />;
```

The send-only modal is 780 px wide.

---

## 📑 Props reference

### Shared props

These props work on all four components unless a row says otherwise.

| Prop                  | Type                                       | Default     | Description |
| --------------------- | ------------------------------------------ | ----------- | ----------- |
| **Connection**        |                                            |             |             |
| `baseURL`             | `string`                                   | –           | Frappe site URL. Turns on internal mode and is also used to build attachment and media URLs. |
| `token`               | `string`                                   | –           | Sent as `Authorization: token <token>`. Requests also carry cookies (`withCredentials`). Unread counts need a token in internal mode. |
| `apiAdapter`          | `WhatsappWidgetApiAdapter`                 | –           | Your own API layer. Takes priority over `baseURL`/`token`. |
| `config`              | `WhatsappWidgetConfig`                     | –           | Full configuration object. When given, the metadata props below are ignored (except `attach` and `preAddedMessages`, which override it). |
| **Record context**    |                                            |             |             |
| `phone`               | `string`                                   | `""`        | Recipient number, in the same format the backend stores in `from`. |
| `refDoctype`          | `string`                                   | `"Contact"` | Base record type. History is loaded for this record. |
| `refName`             | `string \| null`                           | `""`        | Base record name. |
| `links`               | `WhatsappChatLink[]`                       | `[]`        | Other records to link the message to (`{ link_doctype, link_name }`). Pass a stable, memoised array. |
| `activeLeadName`      | `string`                                   | –           | *Trigger components only.* The lead currently in context. It becomes the primary reference for sends. |
| `activeLeadDoctype`   | `string`                                   | `"CRM Lead"` | *Trigger components only.* |
| `activeTaskName`      | `string`                                   | –           | *Trigger components only.* The task currently in context, used for Task templates. |
| `activeTaskDoctype`   | `string`                                   | `"CRM Task"` | *Trigger components only.* |
| **User**              |                                            |             |             |
| `currentUserEmail`    | `string`                                   | –           | The signed-in agent. Needed for unread counts. |
| `currentUserFullName` | `string`                                   | –           | Shown in the chat header. |
| **Real-time**         |                                            |             |             |
| `socketPayload`       | `SocketPayload`                            | –           | The latest raw socket event from your app, for example `{ event: "whatsapp_message", message: doc }`. |
| `socketConnected`     | `boolean`                                  | –           | Socket connection state, shown as "● Connected" or "○ Reconnecting…". |
| `socketAdapter`       | `SocketAdapter`                            | –           | Subscribe/unsubscribe interface. Use it instead of `socketPayload`. |
| **Composer presets**  |                                            |             |             |
| `attach`              | `{ file: string }[]`                       | –           | Files already on the server (for example `/files/brochure.pdf`), pre-attached when the chat opens and sent with the next message. Images get a preview built from `baseURL`. |
| `preAddedMessages`    | `string`                                   | –           | Text that pre-fills the composer when the chat opens. |
| **Notifications**     |                                            |             |             |
| `showNotification`    | `(title: string, message: string) => void` | –           | Success messages ("Message sent successfully", and incoming-message alerts from triggers). |
| `showWarning`         | `(title: string, message: string) => void` | –           | Warnings. |
| `showError`           | `(title: string, message: string) => void` | –           | Failures (send, upload). |

### Trigger-only props (`WhatsappChatTrigger`, `WhatsappSendMessageTrigger`)

| Prop           | Type                   | Default                            | Description |
| -------------- | ---------------------- | ---------------------------------- | ----------- |
| `buttonLabel`  | `string`               | – / `"Send WhatsApp"`              | Text next to the icon. |
| `icon`         | `ReactNode`            | WhatsApp logo                      | Custom icon. |
| `btnClassName` | `string`               | `""`                               | Extra class on the trigger. In `plain` mode, a class containing `button` keeps your own button styles. |
| `variant`      | `"default" \| "plain"` | `"default"`                        | `plain` renders a bare `<button>`. |
| `modalSize`    | `string`               | `"1024px"`                         | Chat modal max width (`WhatsappChatTrigger` only). |
| `isOpen`       | `boolean`              | internal state                     | Controlled open state. |
| `onOpen`       | `() => void`           | –                                  | Called when the trigger is clicked while closed (controlled mode). |
| `onClose`      | `() => void`           | –                                  | Called on overlay click, the close button, or a trigger click while open. |

### `config` object

`WhatsappWidgetConfig` is what every component resolves its props into. Pass it directly in adapter mode:

```ts
interface WhatsappWidgetConfig {
  currentUser: string;            // agent email
  currentUserFullName?: string;
  doctype: string;                // base record type, e.g. "Contact"
  refName: string;                // base record name
  phone: string;                  // recipient
  links?: WhatsappChatLink[];
  activeLeadName?: string;
  activeLeadDoctype?: string;     // default "CRM Lead"
  activeTaskName?: string;
  activeTaskDoctype?: string;     // default "CRM Task"
  isChatOpen: boolean;            // drives history fetch and read receipts
  preventHistoryFetch?: boolean;  // set by send-only mode
  apiBaseUrl?: string;            // prefix for attachment and template media URLs
  attach?: WhatsappAttachItem[];
  preAddedMessages?: string;
}
```

Memoise `config` and `links` (`useMemo`). A new object or array on every render makes the widget recompute its references and can refetch templates.

---

## 🧭 How references and links are chosen

Every send carries a `reference_doctype`/`reference_name` (the primary record) and an optional `links` array. History is always loaded for the **base** record (`refDoctype`/`refName`).

### Plain messages and attachments

| Context | `reference_*` sent | `links` sent |
| ------- | ------------------ | ------------ |
| No active lead, and no `*Lead*` doctype in `links` | base record | `links` as given |
| No `activeLeadName`, but `links` contains a doctype with "Lead" in its name | that linked lead | `[base]` |
| `activeLeadName` set | active lead | `[base]` |

### Templates

The template's `for_doctype` decides which record the server renders the template against:

1. `for_doctype` equals the base doctype → **base record**. `links` = `links` as given.
2. `for_doctype` contains "Lead" and an active lead exists → **active lead**.
3. `for_doctype` contains "Task" and an active task exists → **active task**.
4. `for_doctype` matches a `link_doctype` in `links` → **that linked record**.
5. Nothing matches, or the template has no `for_doctype` → the plain-message primary record (the active lead if there is one, else the base).

In cases 2–5, when the chosen record isn't the base, `links` = `[base, ...links without the chosen record]`.

When loading the template list, the widget sends every record in context as `references` (active lead, active task, base record, then each link, de-duplicated), so the server can return templates and sample values for all of them.

> ⚠️ The active lead and the active task are not added to `links` automatically. If a message must also appear on the lead's or task's timeline, include those records in `links` yourself. See [Known limitations](#-known-limitations).

---

## 📝 Templates

- The 📄 button in the composer opens the template picker. Templates load the first time the picker opens in each chat session.
- Each card shows the category and a text preview (`*header*`, body, footer).
- Choosing a template puts the composer in **template mode**:
  - The text box is locked and shows the preview.
  - A chip shows the template name, with 👁 to preview the full card and ✕ to go back to a normal message.
  - **Send** calls `sendTemplate` with the template's API `name` (for example `hello_world-en_US`).
- Template messages in history render as cards: a text, image or document header (media opens in a new tab), the body, the footer, and the CTA buttons.

---

## 📎 Attachments

- The 📎 button opens a file picker for images, video, audio, `.pdf`, `.doc` and `.docx`. Several files can be picked at once.
- Files are uploaded straight away (`uploadFiles`, or `uploadFile` once per file) and appear as chips under the composer, with a thumbnail for images. A file whose upload returns no URL is dropped.
- On send, the uploaded `file_url`s go as `attach: [{ file }]`. The content type (`image` / `video` / `audio` / `document`) is taken from the **first** file.
- `attach` presets (paths already on the server) are added when the chat opens.
- In history, `image` messages render `<img src="{apiBaseUrl}/{attach}">`, and other types render a download link.

The widget does not check file size or type beyond the picker's `accept` list. Your backend must enforce WhatsApp's media limits.

---

## 🔌 Real-time updates (sockets)

The widget never opens a socket itself. Your app owns the Socket.io connection and passes events in, in one of two ways.

### Option A: pass-through (`socketPayload`)

Pass the latest event as a prop. This is the simplest option and is what the CRM uses.

```tsx
const [lastEvent, setLastEvent] = useState<SocketPayload>();
const { isConnected } = useSocket((evt) => {
  if (evt.event === "whatsapp_message") setLastEvent(evt);
});

<WhatsappChatTrigger {...props} socketPayload={lastEvent} socketConnected={isConnected} />;
```

`message` should be the raw `WhatsApp Message` doc that Frappe publishes with `publish_realtime("whatsapp_message", doc)`. The widget turns it into a `Message` with `transformToMessage`.

### Option B: `socketAdapter` (recommended for busy pages)

Expose subscribe and unsubscribe functions. Each event reaches the widget exactly once, which avoids missing events when React batches state updates.

```ts
const listeners = useRef(new Set<(m: Message) => void>());

useSocket((evt) => {
  if (evt.event !== "whatsapp_message") return;
  const msg = transformToMessage(evt.message); // your own copy, or one matching the package's
  if (msg) listeners.current.forEach((cb) => cb(msg));
});

const socketAdapter = useMemo<SocketAdapter>(() => ({
  isConnected,
  onMessage: (cb) => listeners.current.add(cb),
  offMessage: (cb) => listeners.current.delete(cb),
}), [isConnected]);
```

### What the widget does with an event

- **Incoming, no status** → appended to the chat, marked read if the chat is open and `from === phone`, and counted on the unread badge.
- **Incoming, with a status** → only updates the status of a message that is already shown.
- **Outgoing** → replaces the pending `temp-…` bubble (the latest one sent, or one with the same text), or is appended if no bubble is pending. An event for a message already shown only updates its status.

> ⚠️ The widget does not filter events by contact. Send it only the events for the record being shown, or a room scoped to that document. Otherwise another contact's messages can appear in the open chat. See [Known limitations](#-known-limitations).

### Minimal `useSocket` example

```ts
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

export function useSocket(onEvent: (e: { event: string; message?: any }) => void) {
  const handler = useRef(onEvent);
  handler.current = onEvent;
  const [isConnected, setConnected] = useState(false);

  useEffect(() => {
    const socket = io(SOCKET_URL, {
      transports: ["websocket", "polling"],
      reconnection: true,
      extraHeaders: { Authorization: `token ${TOKEN}` },
    });
    socket.on("connect", () => setConnected(true));
    socket.on("disconnect", () => setConnected(false));
    socket.on("whatsapp_message", (doc) => handler.current({ event: "whatsapp_message", message: doc }));
    return () => { socket.disconnect(); };
  }, []);

  return { isConnected };
}
```

---

## ✅ Read receipts and unread badges

**Read receipts** (`sendReadReceipt(name)`):

- When the chat opens and history has loaded, the latest incoming message without a status is marked read. The server is expected to mark earlier ones too.
- While the chat is open, each new incoming socket message from `phone` is marked read.

**Unread badge** (trigger components):

- Loaded from `getIncomingCommunications(currentUserEmail)` into a shared store, on mount and after every successful send.
- The count for this trigger is the `whatsapp` entry where `from === phone` or `customer === refName`. With neither set, it is the total across all contacts.
- New incoming socket messages add to the count. Opening the chat clears it locally.
- When the chat is closed, an incoming message calls `showNotification("WhatsApp", "New message received from …")`, de-duplicated per message for 60 s.

In internal mode the badge needs both `token` and `currentUserEmail`.

---

## 🔔 Notifications

The package ships no toast library. It calls your callbacks instead:

| Callback           | Called for |
| ------------------ | ---------- |
| `showNotification` | Message or template sent, and new incoming messages (triggers, chat closed). |
| `showWarning`      | Warnings. |
| `showError`        | Send or template failure, upload failure. |

With no callbacks in internal mode, success messages fall back to the browser `Notification` API (only if permission was already granted), then to `console.log`.

Wrap the callbacks in `useCallback`. A new function on every render rebuilds the adapter on every render.

---

## 🧠 Advanced: custom adapters

Implement `WhatsappWidgetApiAdapter` to use your own HTTP client, caching (React Query) or backend:

```ts
interface WhatsappWidgetApiAdapter {
  getMessages(doctype: string, name: string): Promise<Message[]>;      // return newest first; the widget reverses it
  sendMessage(payload: {
    to: string; message: string;
    attach?: string | { file: string }[]; content_type?: string;
    reference_doctype?: string; reference_name?: string;
    links?: WhatsappChatLink[];
  }): Promise<{ name?: string }>;
  sendTemplate(payload: {
    to: string; template: string;
    reference_doctype?: string; reference_name?: string;
    links?: WhatsappChatLink[];
  }): Promise<any>;
  getTemplates(refs: TemplateListReference[]): Promise<WhatsAppTemplateResponse[]>;
  uploadFile(file: File): Promise<{ file_url: string }>;
  uploadFiles?(files: File[]): Promise<{ file_urls: string[] }>;     // preferred when present
  sendReadReceipt(messageName: string): Promise<void>;
  getUnreadCount(phone: string, referenceName: string): Promise<number>;
  getIncomingCommunications?(user: string): Promise<IncomingCommunication[]>; // powers the badge store
  onMessageSent?(): void;
  showNotification?(title: string, message: string): void;
  showWarning?(title: string, message: string): void;
  showError?(title: string, message: string): void;
}
```

`getMessages` must return `Message` objects. Statuses are numbers: `1` Sent, `2` Failed, `3` Delivered, `4` Read, `5` Pending. The package uses `transformToMessage` internally to map a raw Frappe doc. It isn't exported, so copy its mapping if you need the same behaviour.

### Example with React Query

```tsx
"use client";
import { useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";
import {
  WhatsappChat,
  type WhatsappWidgetApiAdapter,
  type WhatsappWidgetConfig,
} from "react-whatsapp-chat-package";
import { api } from "@/services/whatsapp"; // your API functions

export function ChatPanel({ phone, contact, lead, links }: Props) {
  const qc = useQueryClient();

  const config = useMemo<WhatsappWidgetConfig>(() => ({
    currentUser: session.email,
    doctype: "Contact",
    refName: contact,
    phone,
    links,
    activeLeadName: lead,
    isChatOpen: true,
    apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  }), [contact, phone, links, lead]);

  const apiAdapter = useMemo<WhatsappWidgetApiAdapter>(() => ({
    getMessages: (dt, name) =>
      qc.fetchQuery({ queryKey: ["wa-messages", dt, name], queryFn: () => api.getMessages(dt, name), staleTime: 0 }),
    sendMessage: (p) => api.sendMessage(p),
    sendTemplate: (p) => api.sendTemplate(p),
    getTemplates: (refs) => api.getTemplates(refs),
    uploadFile: (f) => api.uploadFile(f),
    uploadFiles: (fs) => api.uploadFiles(fs),
    sendReadReceipt: (name) => api.sendReadReceipt(name),
    getUnreadCount: async () => 0,
    getIncomingCommunications: (user) => api.getIncomingCommunications(user),
    onMessageSent: () => qc.invalidateQueries({ queryKey: ["incoming-communications"] }),
    showError: (_t, m) => toast.error(m),
  }), [qc]);

  return (
    <div style={{ height: 600 }}>
      <WhatsappChat config={config} apiAdapter={apiAdapter} socketAdapter={socketAdapter} />
    </div>
  );
}
```

---

## 🪝 Hooks and low-level exports

| Export | Purpose |
| ------ | ------- |
| `WhatsappChatProvider` | Context and store provider. Props: `apiAdapter`, `config`, `socketAdapter?`, `socketPayload?`. |
| `WhatsappChatWidget` / `WhatsappSendMessageWidget` | The bare UIs, which must sit inside `WhatsappChatProvider`. Use them to build your own shell. |
| `useWhatsappWidgetLogic()` | Everything the UI uses (messages, send, templates, uploads, socket handling). Must sit inside the provider. |
| `useWhatsappChatConfig()` | Reads `{ config, apiAdapter, socketAdapter, socketPayload }` from context. |
| `useWhatsappWidgetZustand(selector)` | Selects from the instance store (`messages`, `isLoading`, `error`, and actions). |
| `useWhatsappBadgeCount(apiAdapter, socketAdapter?, socketPayload?, phone?, refName?, isOpen?, userEmail?)` | The unread count used by `WhatsappChatTrigger`, for a custom button. |
| `WhatsAppMessageSkeleton`, `WhatsAppTemplateSkeleton` | The loading placeholders. |

Example of a custom shell:

```tsx
<WhatsappChatProvider apiAdapter={apiAdapter} config={config} socketAdapter={socketAdapter}>
  <MyHeader />
  <WhatsappChatWidget />
</WhatsappChatProvider>
```

---

## 🧾 TypeScript types

Everything in `src/types/whatsapp.ts` is exported. The main ones:

- `Message`: the message shape the UI renders. Important fields: `name`, `message`, `is_outbound` (0/1), `status` (1–5), `attach`, `content_type`, `message_type` (`"Template"`), `header`, `footer`, `template_links`, `header_type`, `sample`, `from`.
- `WhatsAppMessage` (an API row) and `SocketMessageDoc` (a socket doc): the raw backend shapes.
- `WhatsAppTemplateResponse`: a template list item (`name`, `template`, `header`, `footer`, `for_doctype`, `links`, `category`, …).
- `WhatsappWidgetConfig`, `WhatsappWidgetApiAdapter`, `SocketAdapter`, `SocketPayload`.
- `WhatsappChatLink` (`{ link_doctype, link_name }`), `WhatsappAttachItem` (`{ file }`), `TemplateListReference`, `IncomingCommunication`.
- Component props: `WhatsappChatComponentProps`, `WhatsappSendMessageProps`.

---

## 🌐 Backend API contract

In internal mode, the widget calls these Frappe methods on `baseURL`:

| Purpose | Method & path | Parameters |
| ------- | ------------- | ---------- |
| History | `GET /api/method/crm_integration.crm_integration.api.whatsapp.get_whatsapp_messages` | `reference_doctype`, `reference_name` → `{ message: WhatsAppMessage[] }` (newest first) |
| Send message | `POST …api.whatsapp.create_whatsapp_message` | query string: `to`, `message`, `reference_doctype`, `reference_name`, `attach` (JSON), `content_type`, `links` (JSON) |
| Templates | `GET …api.whatsapp.get_templates_list` | `references` (JSON array of `{ reference_doctype, reference_name }`) → `{ message: { data: WhatsAppTemplateResponse[] } }` |
| Send template | `POST …api.whatsapp.send_whatsapp_template` | form data: `to`, `template`, `reference_doctype`, `reference_name`, `links` (JSON) |
| Read receipt | `GET …api.whatsapp.send_read_receipt` | `name` |
| Upload | `POST …api.whatsapp.upload_files_from_portal` | multipart `file0`, `file1`, … → `{ message: { file_url } \| [{ file_url }] }` |
| Unread data | `GET /api/method/crm_integration.crm_integration.api.dashboard.get_incoming_communications` | `user` → `{ message: { data: IncomingCommunication[] } }` |

Real-time event: `whatsapp_message`, whose payload is the `WhatsApp Message` doc (`name`, `type` Incoming/Outgoing, `from`, `to`, `message`, `status`, `attach`, `content_type`, `message_type`, `template`, `header`, `footer`, `links`, `reference_doctype`, `reference_name`, …).

---

## 🎨 Styling

- One stylesheet: `react-whatsapp-chat-package/styles.css` (also listed under `"style"` in `package.json`). The ES build also imports it automatically.
- Most classes start with `whatsapp-` (`.whatsapp-chat-container`, `.whatsapp-header`, `.whatsapp-message-list`, `.whatsapp-input-container`, `.whatsapp-send-btn`, `.whatsapp-template-message-card`, `.whatsapp-trigger-badge`, …). Override them in your own CSS.
- Message bubbles use `.message-bubble.sent` and `.message-bubble.received`. The modal uses `.raw-modal-overlay`, `.raw-modal-container`, `.raw-modal-header` and `.raw-modal-body`, with `z-index: 9999`. Other 8848 Digital widgets use some of the same names, so the stylesheet loaded last wins.

---

## 🧪 Compatibility

- **React 19:** supported and used in production by the CRM frontend.
- **React 18:** listed in `peerDependencies`, but the current build bundles React 19's JSX runtime, so React 18 apps fail at render ("Objects are not valid as a React child"). Use React 19 until the build marks `react/jsx-runtime` as external.
- **Browsers:** evergreen browsers. Uses `Array.prototype.findLast` (Chrome 97+, Safari 15.4+, Firefox 104+).
- **Module formats:** ESM (`dist/index.mjs`, imports its CSS) and UMD/CJS (`dist/index.js`, which needs a manual CSS import). Types are in `dist/index.d.ts`.

---

## ⚠️ Known limitations

These are known issues in 1.0.19, to be fixed in later releases:

1. **Socket events are not filtered by contact.** Hosts should only pass events for the record on screen (see [Real-time updates](#-real-time-updates-sockets)).
2. **Pending-message swap:** an outgoing socket event can replace the wrong pending bubble when several are pending, or when a send has failed. Reloading the chat shows the correct history.
3. **Lead/task links:** active lead and task records aren't added to `links` automatically. Some template paths send only `links`.
4. **Unmatched template `for_doctype`** falls back to the primary record instead of blocking the send.
5. **Message text goes in the query string** of `create_whatsapp_message`. Very long messages, especially in non-Latin scripts, can exceed the server's URL length limit.
6. **Enter anywhere in the composer sends**, including while a composer button has focus.
7. **Mixed attachments** (for example an image and a PDF) all get the first file's content type.
8. **No client-side file size or type validation.**
9. **The send-only widget marks incoming messages read** while it is open.
10. **React 18** is not currently supported (see [Compatibility](#-compatibility)).

---

## 🏗️ Development

```bash
npm install        # also runs "prepare" → npm run build
npm run dev        # Vite dev server
npm run build      # tsc type-check + Vite library build into dist/
npx tsc --noEmit   # type-check only
```

Layout:

```
src/
  api/whatsappApi.ts              axios client for the Frappe endpoints
  components/                     WhatsappChat, triggers, MessageList, MessageInput, template UI
    common/                       Modal, FileUpload, Icons, Skeleton
    skeleton/                     loading skeletons
  context/WhatsappChatContext.tsx provider, per-instance store, shared badge store
  hooks/
    useWhatsappWidgetLogic.ts     send, templates, uploads, socket handling, read receipts
    useWhatsappWidgetResolution.ts props → config / adapters
    useDefaultWhatsappAdapter.ts  internal-mode adapter
    useWhatsappBadgeCount.ts      unread count
  styles/whatsapp-chat.css
  types/whatsapp.ts               public types
  utils/                          message transform, link parsing, adapter wrapping
```

`dist/` is committed to the repository and is what npm publishes. Rebuild with `npm run build` before you bump the version.

### Releasing

1. Make the change on a `fix/react-whatsapp-chat-widget-vX.Y.Z` branch.
2. `npm run build` and commit `dist/`.
3. `npm version patch`.
4. `npm publish`, then open a PR to `master`.

---

## 📜 Changelog

| Version | Changes |
| ------- | ------- |
| **1.0.19** | Message list scroll fix: scroll-to-bottom is deferred until after layout. |
| **1.0.18** | Chat scroll issue fixed. |
| **1.0.17** | `activeTaskName`/`activeTaskDoctype` props. The template's `for_doctype` now picks the reference record and links. Template lookup sends lead, task, base and link references. |
| **1.0.16** | Quick-message (send-only) UI fixes. |
| **1.0.14 – 1.0.15** | CSS import fixes (`styles.css` export, `vite-plugin-lib-inject-css`). React version and peer dependency changes. |
| **1.0.13** | UI refresh, multiple file attachments, README update. |
| **1.0.11 – 1.0.12** | Read-receipt fixes. |
| **1.0.9 – 1.0.10** | Send-only `WhatsappSendMessage` component. |
| **1.0.0** | First standalone release. |

---

## 📄 License

MIT © 8848 Digital
