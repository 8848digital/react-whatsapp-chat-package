"use client";
import React, { useState, useRef, KeyboardEvent } from "react";
import FileUpload, { FileUploadRef } from "./common/FileUpload";
import { Paperclip, FileText, PaperPlaneTilt } from "./common/Icons";
import { TemplateChipWithPreview } from "./TemplateChipWithPreview";
import { AttachmentPreview } from "./AttachmentPreview";
import type { MessageInputProps } from "../types/whatsapp";

const Spinner = () => <div className="whatsapp-spinner" />;

export const MessageInput = ({
  onSend,
  isLoading,
  isUploading = false,
  isSending = false,
  onTemplateClick,
  templateText,
  selectedTemplateName,
  selectedTemplate,
  onClearTemplate,
  attachedFiles = [],
  onFileRemove,
  onFileSelect,
  initialInputText = "",
}: MessageInputProps) => {
  const [text, setText] = useState(initialInputText);
  const containerRef = useRef<HTMLDivElement>(null);
  const fileUploadRef = useRef<FileUploadRef>(null);
  const templateSelected = !!selectedTemplateName;

  // Focus container when template is selected so Enter key works
  React.useEffect(() => {
    if (templateSelected) {
      containerRef.current?.focus();
    }
  }, [templateSelected]);

  // Sync text when template changes; otherwise restore prefilled text when template is cleared
  React.useEffect(() => {
    if (templateText !== undefined && templateText !== "") {
      setText(templateText);
    } else if (!selectedTemplateName) {
      setText(initialInputText ?? "");
    }
  }, [templateText, selectedTemplateName, initialInputText]);

  const handleSend = () => {
    const attach = attachedFiles
      .map((file) => file.fileUrl)
      .filter(Boolean)
      .map((fileUrl) => ({ file: fileUrl as string }));
    const firstContentType = attachedFiles[0]?.contentType;
    if (text.trim() || attach.length > 0 || templateSelected) {
      onSend(text, attach, firstContentType);
      if (!templateSelected) {
        setText("");
      }
    }
  };

  const handleFileClick = () => {
    fileUploadRef.current?.click();
  };

  const handleFilesSelected = (files: File[]) => {
    if (files?.length && onFileSelect) {
      onFileSelect(files);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isLoading) {
      handleSend();
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = e.target.value;
    setText(newVal);
    if (!newVal.trim() && selectedTemplateName && onClearTemplate) {
      onClearTemplate();
    }
  };

  return (
    <div 
      ref={containerRef}
      className="whatsapp-input-container" 
      onKeyDown={handleKeyDown}
      tabIndex={templateSelected ? 0 : undefined}
      style={{ outline: "none" }}
    >
      <FileUpload ref={fileUploadRef} onSelect={handleFilesSelected} multiple={true} accept="image/*,video/*,audio/*,.pdf,.doc,.docx" />
      <button
        onClick={handleFileClick}
        type="button"
        className="whatsapp-input-btn"
        disabled={isLoading}
        title={isUploading ? "Uploading..." : "Attach File"}
        style={{
          padding: "0.5rem",
          background: "transparent",
          border: "none",
          cursor: isLoading ? "not-allowed" : "pointer",
          color: "#175353",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isUploading ? <Spinner /> : <Paperclip size={20} color="#175353" />}
      </button>
      {onTemplateClick && (
        <button
          onClick={onTemplateClick}
          className="whatsapp-template-btn"
          type="button"
          disabled={isLoading}
          title="Select Template"
          style={{
            padding: "0.5rem",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "#175353",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FileText size={20} color="#175353" />
        </button>
      )}

      {selectedTemplateName && onClearTemplate && (
        <TemplateChipWithPreview
          selectedTemplateName={selectedTemplateName}
          templateText={templateText}
          template={selectedTemplate}
          onClearTemplate={() => {
            onClearTemplate();
            setText("");
          }}
        />
      )}
      <input
        value={text}
        onChange={handleTextChange}
        placeholder="Type a message..."
        className="whatsapp-input-field"
        disabled={isLoading || templateSelected}
      />
      <button
        onClick={handleSend}
        className="whatsapp-send-btn"
        disabled={isLoading || (!templateSelected && !text.trim() && attachedFiles.length === 0)}
        title={isSending ? "Sending..." : "Send"}
      >
        {isSending ? <Spinner /> : <PaperPlaneTilt size={20} color="white" />}
      </button>
      {attachedFiles.length > 0 && (
        <div className="whatsapp-input-attachments-row">
          {attachedFiles.map((file, index) => (
            <AttachmentPreview
              key={`${file.file.name}-${index}`}
              attachedFile={file}
              onFileRemove={onFileRemove ? () => onFileRemove(index) : undefined}
            />
          ))}
        </div>
      )}
    </div>
  );
};
