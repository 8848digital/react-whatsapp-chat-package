import React from "react";
import Skeleton from "../common/Skeleton";

/**
 * Message list skeleton to show while loading chat history.
 */
const WhatsAppMessageSkeleton: React.FC = () => {
  const bubbleStyle: React.CSSProperties = { marginBottom: 8 };

  return (
    <div className="whatsapp-message-list">
      <div className="message-bubble received" style={bubbleStyle}>
        <Skeleton width="140px" height="1rem" style={{ marginBottom: 8 }} />
        <Skeleton width="60px" height="0.75rem" />
      </div>
      <div className="message-bubble sent" style={bubbleStyle}>
        <Skeleton width="100px" height="1rem" style={{ marginBottom: 8 }} />
        <Skeleton width="55px" height="0.75rem" />
      </div>
      <div className="message-bubble received" style={bubbleStyle}>
        <Skeleton width="180px" height="1rem" style={{ marginBottom: 8 }} />
        <Skeleton width="60px" height="0.75rem" />
      </div>
      <div className="message-bubble sent" style={bubbleStyle}>
        <Skeleton width="120px" height="1rem" style={{ marginBottom: 8 }} />
        <Skeleton width="55px" height="0.75rem" />
      </div>
      <div className="message-bubble received" style={bubbleStyle}>
        <Skeleton width="90px" height="1rem" style={{ marginBottom: 8 }} />
        <Skeleton width="60px" height="0.75rem" />
      </div>
    </div>
  );
};

export default WhatsAppMessageSkeleton;
