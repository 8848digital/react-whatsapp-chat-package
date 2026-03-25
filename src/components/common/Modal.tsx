import React, { useEffect } from "react";
import { X } from "./Icons";
import "../../styles/whatsapp-chat.css";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  header?: string | React.ReactNode;
  children: React.ReactNode;
  width?: string;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  header,
  children,
  width = "600px",
  className = "",
}) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className={`raw-modal-overlay ${className}`} onClick={onClose}>
      <div 
        className="raw-modal-container" 
        style={{ maxWidth: width }} 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="raw-modal-header">
          <div className="raw-modal-title">{header}</div>
          <button className="raw-modal-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        <div className="raw-modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;

