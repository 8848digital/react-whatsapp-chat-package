import React from "react";

interface SkeletonProps {
  width?: string;
  height?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * A simple, standalone Skeleton component for the WhatsApp widget package.
 * Avoids external dependencies like Primereact.
 */
const Skeleton: React.FC<SkeletonProps> = ({ width, height, className, style }) => {
  return (
    <div
      className={`whatsapp-skeleton ${className || ""}`}
      style={{
        width,
        height,
        ...style,
      }}
    />
  );
};

export default Skeleton;
