import React from "react";
import Skeleton from "../common/Skeleton";

/**
 * Skeleton to show while loading WhatsApp templates (catalog view).
 */
const WhatsAppTemplateSkeleton = () => {
  return (
    <div className="whatsapp-templates-grid">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="whatsapp-template-skeleton-item"
        >
          {/* Category */}
          <Skeleton width="40%" height="12px" style={{ marginBottom: "8px" }} />

          {/* Divider */}
          <div className="whatsapp-item-divider" />

          {/* Preview Text lines */}
          <Skeleton width="100%" height="14px" style={{ marginBottom: "8px" }} />
          <Skeleton width="90%" height="14px" style={{ marginBottom: "8px" }} />
          <Skeleton width="60%" height="14px" />
        </div>
      ))}
    </div>
  );
};

export default WhatsAppTemplateSkeleton;
