import { default as React } from 'react';
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
declare const FileUpload: React.ForwardRefExoticComponent<FileUploadProps & React.RefAttributes<FileUploadRef>>;
export default FileUpload;
