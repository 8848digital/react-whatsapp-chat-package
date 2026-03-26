import { default as React } from 'react';
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
declare const Skeleton: React.FC<SkeletonProps>;
export default Skeleton;
