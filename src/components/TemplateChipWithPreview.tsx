"use client";
import React, { useState } from "react";
import { Eye, X } from "./common/Icons";
import Modal from "./common/Modal";
import { TemplateMessageCard } from "./TemplateMessageCard";
import type { TemplateChipWithPreviewProps } from "../types/whatsapp";

export const TemplateChipWithPreview = ({
  selectedTemplateName,
  templateText,
  template,
  onClearTemplate,
}: TemplateChipWithPreviewProps) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleClear = () => {
    onClearTemplate();
    setIsPreviewOpen(false);
  };

  const displayName = selectedTemplateName.split("-")[0];
  const cardMessage = template?.template ?? templateText ?? "";
  const cardHeader = template?.header ?? null;
  const cardFooter = template?.footer ?? null;
  const cardLinks = template?.links?.map((l: { button_label?: string; link?: string }) => ({
    button_label: l.button_label ?? "",
    link: l.link ?? "",
  })) || [];
  const cardCreation = (template?.modified || template?.creation || new Date().toISOString()) as string;

  return (
    <>
      <div className="whatsapp-template-chip">
        <span>Template: {displayName}</span>
        <button type="button" onClick={() => setIsPreviewOpen(true)} className="whatsapp-template-chip-preview" title="Preview template">
          <Eye size={20} color="currentColor" />
        </button>
        <button type="button" onClick={handleClear} className="whatsapp-template-chip-clear" title="Send as normal message instead">
          <X size={20} color="currentColor" />
        </button>
      </div>
      <Modal
        open={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        header={<h4 className="text-base font-semibold">Template Preview</h4>}
      >
        <div style={{ padding: "20px 0" }}>
          {template ? (
            <TemplateMessageCard
              header={cardHeader}
              message={cardMessage}
              footer={cardFooter}
              template_links={cardLinks}
              creation={cardCreation}
              is_outbound={1}
              status={undefined}
              isPreview={true}
            />
          ) : (
            <pre className="whatsapp-template-preview-content">{templateText ?? ""}</pre>
          )}
        </div>
      </Modal>
    </>
  );
};
