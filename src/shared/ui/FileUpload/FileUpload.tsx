import React, { useRef, useState } from 'react';
import styles from './fileUpload.module.scss';

export type FileUploadProps = {
  label?: string;
  helperText?: string;
  disabled?: boolean;
  onFileSelect?: (file: File) => void;
};

export const FileUpload: React.FC<FileUploadProps> = ({ label, helperText, disabled = false, onFileSelect }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [error, setError] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setUploadedFile(file);
      if (onFileSelect) onFileSelect(file);
      // Simuler la progression de l'upload
      setUploadProgress(0);
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 300);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (disabled) return;
    const file = e.dataTransfer.files[0];
    if (file) {
      setUploadedFile(file);
      if (onFileSelect) onFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className={styles.fileUploadWrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <div
        className={`${styles.dropzone} ${disabled ? styles.disabled : ''} ${error ? styles.error : ''}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => !disabled && fileInputRef.current?.click()}
      >
        {uploadedFile ? (
          <div className={styles.fileInfo}>
            <span>{uploadedFile.name}</span>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: `${uploadProgress}%` }} />
            </div>
          </div>
        ) : (
          <span>Перетащите файл сюда или</span>
        )}
      </div>
      <input type="file" ref={fileInputRef} className={styles.hiddenInput} onChange={handleFileChange} disabled={disabled} />
      {helperText && <p className={styles.helperText}>{helperText}</p>}
    </div>
  );
};
