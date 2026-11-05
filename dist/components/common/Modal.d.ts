import { default as React } from 'react';
interface ModalProps {
    open: boolean;
    onClose: () => void;
    header?: string | React.ReactNode;
    children: React.ReactNode;
    width?: string;
    className?: string;
}
export declare const Modal: React.FC<ModalProps>;
export default Modal;
