"use client";
import React, { useState } from "react";
import type { WhatsAppTemplateResponse, WhatsAppTemplateSelectorProps } from "../types/whatsapp";
import WhatsAppTemplateSkeleton from "./skeleton/WhatsAppTemplateSkeleton";

/** Helper to format the full template preview string with header and footer. */
function formatTemplatePreview(template: WhatsAppTemplateResponse): string {
  let preview = "";
  if (template.header) {
    preview += `*${template.header}*\n\n`;
  }
  preview += template.template || "";
  if (template.footer) {
    preview += `\n\n${template.footer}`;
  }
  return preview;
}

/**
 * Component to display a list of available WhatsApp templates for the user to select.
 */
const WhatsAppTemplateSelector = ({ templates, onSelect, isLoading = false }: WhatsAppTemplateSelectorProps) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  if (isLoading) {
    return <WhatsAppTemplateSkeleton />;
  }

  if (templates.length === 0) {
    return (
      <section style={{ padding: '1rem', textAlign: 'center' }}>
        <p style={{ color: '#666', fontSize: '0.875rem' }}>No templates available</p>
      </section>
    );
  }

  return (
    <section style={{ padding: '1rem' }}>
      <div className="template-scroll-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
          {templates.map((template) => {
            const preview = formatTemplatePreview(template);
            const isHovered = hoveredId === template.name;
            return (
              <button
                key={template.name}
                type="button"
                onClick={() => onSelect(preview, template.name, template)}
                onMouseEnter={() => setHoveredId(template.name)}
                onMouseLeave={() => setHoveredId(null)}
                className="whatsapp-template-card"
                style={{
                   backgroundColor: isHovered ? '#f2f5f6' : 'white',
                   display: 'flex',
                   flexDirection: 'column',
                   border: '1px solid #eee',
                   borderRadius: '8px',
                   padding: '12px 16px',
                   cursor: 'pointer',
                   textAlign: 'left'
                }}
              >
                <header style={{ fontSize: '12px', color: '#575E60', marginBottom: '8px', textTransform: 'uppercase' }}>
                  {template.category || "TEMPLATE"}
                </header>
                <div style={{ borderTop: '1px solid #eee', width: '100%', marginBottom: '12px' }} />
                <p
                  style={{ 
                    fontSize: '14px', 
                    lineHeight: '1.5', 
                    color: '#414141', 
                    maxHeight: '100px', 
                    overflowY: 'auto', 
                    whiteSpace: 'pre-wrap' 
                  }}
                >
                  {preview}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatsAppTemplateSelector;
