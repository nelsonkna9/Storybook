import React, { TextareaHTMLAttributes } from 'react';
import styles from './textarea.module.scss';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
  size?: 'large' | 'medium' | 'small';
}

export const Textarea: React.FC<TextareaProps> = ({ label, helperText, error = false, size = 'medium', ...props }) => {
  return (
    <div className={styles.textareaWrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <textarea className={`${styles.textarea} ${styles[size]} ${error ? styles.error : ''}`} {...props} />
      {helperText && <p className={styles.helperText}>{helperText}</p>}
    </div>
  );
};
