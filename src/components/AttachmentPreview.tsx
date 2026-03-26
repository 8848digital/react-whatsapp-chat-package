"use client";
import React from "react";
import { X } from "./common/Icons";
import type { AttachmentPreviewProps } from "../types/whatsapp";

export const AttachmentPreview = ({ attachedFile, onFileRemove }: AttachmentPreviewProps) => {
  return (
    <div className="whatsapp-attachment-preview">
      {attachedFile.preview && (
        <>
          <img src={attachedFile.preview} alt="Preview" className="whatsapp-attachment-image-thumb" />
        </>
      )}
      <div className="whatsapp-attachment-info">
        <span className="whatsapp-attachment-name">{attachedFile.file.name}</span>
        {onFileRemove && (
          <button onClick={onFileRemove} type="button" className="whatsapp-attachment-remove" title="Remove attachment">
            <X size={14} color="#666" />
          </button>
        )}
      </div>
    </div>
  );
};
