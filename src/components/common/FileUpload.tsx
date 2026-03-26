"use client";
import React, { forwardRef, useImperativeHandle, useRef } from "react";

interface FileUploadProps {
  onSelect?: (files: File[]) => void;
  multiple?: boolean;
  accept?: string;
  maxFileSize?: number;
  className?: string;
}

export interface FileUploadRef {
  click: () => void;
}

const FileUpload = forwardRef<FileUploadRef, FileUploadProps>(({ onSelect, multiple = true, accept, maxFileSize, className = "" }, ref) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    click: () => {
      fileInputRef.current?.click();
    },
  }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && onSelect) {
      const fileArray = Array.from(files);
      if (maxFileSize) {
        const validFiles = fileArray.filter((file) => file.size <= maxFileSize);
        onSelect(validFiles);
      } else {
        onSelect(fileArray);
      }
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <input
      ref={fileInputRef}
      type="file"
      multiple={multiple}
      accept={accept}
      onChange={handleChange}
      className={className}
      style={{ display: "none" }}
    />
  );
});

FileUpload.displayName = "FileUpload";

export default FileUpload;
