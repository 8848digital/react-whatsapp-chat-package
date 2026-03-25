# React WhatsApp Chat Widget 💬

A professional, fully-decoupled WhatsApp Chat Widget for React designed with an adapter-based architecture. Built by **8848 Digital**, this package provides a seamless way to integrate WhatsApp messaging into any React application using your own API and real-time logic.

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

```bash
# If using Git installation
npm install https://github.com/8848digital/react-whatsapp-chat-widget.git
```

### Peer Dependencies

This package requires the following peers to be installed in your project:

```bash
npm install react react-dom zustand @tanstack/react-query @phosphor-icons/react
```

## 📋 Usage

### 1. Standard Usage (Direct API Integration)

The easiest way to integrate. The widget handles all API calls internally using the provided `baseURL` and `token`.

```tsx
import { WhatsappChatTrigger } from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/dist/styles.css";

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
```

### 2. Embedded Mode (Direct Component Usage)

If you already have your own modal or want to embed the chat directly into a sidebar/page, use the `WhatsappChat` component.

```tsx
import { WhatsappChat } from "react-whatsapp-chat-widget";

const SidePanel = () => {
  return (
    <div style={{ height: "600px", border: "1px solid #ddd" }}>
      <WhatsappChat baseURL="https://api.com" token="xyz" phone="1234567890" refName="Contact-001" />
    </div>
  );
};
```

## 🛠 Props & Configuration

### `WhatsappChatTrigger` Props

The Trigger component includes everything in the `WhatsappChat` props, plus:

| Prop           | Type                   | Default      | Description                                                  |
| -------------- | ---------------------- | ------------ | ------------------------------------------------------------ |
| `buttonLabel`  | `string`               | `"WhatsApp"` | Trigger button text.                                         |
| `icon`         | `ReactNode`            | Optional     | Custom icon to show inside/instead of the button.            |
| `btnClassName` | `string`               | `""`         | Additional CSS class for the button/trigger wrapper.         |
| `variant`      | `"default" \| "plain"` | `"default"`  | Use "plain" for a minimalist button without the wrapper box. |
| `modalSize`    | `string`               | `"1024px"`   | Chat modal width (e.g. "800px", "50%").                      |

### `WhatsappChat` / Shared Props

These props are available on both `WhatsappChat` and `WhatsappChatTrigger`.

| Prop                      | Type                 | Default     | Description                                                   |
| ------------------------- | -------------------- | ----------- | ------------------------------------------------------------- |
| **Connection Settings**   |                      |             |                                                               |
| `baseURL`                 | `string`             | Optional    | API Base URL.                                                 |
| `token`                   | `string`             | Optional    | Auth token for API calls.                                     |
| **Metadata**              |                      |             |                                                               |
| `phone`                   | `string`             | Optional    | The recipient's phone number.                                 |
| `refName`                 | `string`             | `""`        | Primary record ID (e.g. "Contact-001").                       |
| `refDoctype`              | `string`             | `"Contact"` | Primary record type.                                          |
| `currentUserEmail`        | `string`             | Optional    | Your identity (required for unread badge logic).              |
| `links`                   | `WhatsappChatLink[]` | `[]`        | Secondary linked documents to track communication against.    |
| **Real-Time Integration** |                      |             |                                                               |
| `socketPayload`           | `SocketPayload`      | Optional    | Raw socket event from your host app to trigger unread counts. |
| `socketConnected`         | `boolean`            | Optional    | Manual override for socket connection status.                 |
| **Notifications**         |                      |             |                                                               |
| `showNotification`        | `Function`           | Optional    | Callback for success alerts.                                  |
| `showWarning`             | `Function`           | Optional    | Callback for warning alerts.                                  |
| `showError`               | `Function`           | Optional    | Callback for error alerts.                                    |

## 🔔 Notification Handling

The widget is UI-agnostic regarding notifications. Instead of bundling a toast library, it provides "slots" for you to connect your own application's alert system.

The following props follow the signature: `(title: string, message: string) => void`.

- **`showNotification`**: Called on successful message send or template selection.
- **`showWarning`**: Called for validation errors or "Upload in Progress" states.
- **`showError`**: Called for API or server-side failures.

### Example with custom handlers:

```tsx
<WhatsappChatTrigger
  {...props}
  showNotification={(title, message) => myToast.show({ title, body: message, type: "success" })}
  showError={(title, message) => myToast.show({ title, body: message, type: "error" })}
/>
```

## 🎨 Styling

Import the styles in your main entry point (App.tsx or layout.tsx):

```javascript
import "react-whatsapp-chat-package/dist/styles.css";
```

## 📦 Building for Production

```bash
cd react-whatsapp-chat-package
npm run build
```

## 📄 License

MIT © 8848 Digital
