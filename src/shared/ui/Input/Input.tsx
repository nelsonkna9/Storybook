import React, { InputHTMLAttributes } from 'react';
import styles from './input.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
  size?: 'large' | 'medium' | 'small';
}

export const Input: React.FC<InputProps> = ({ label, helperText, error = false, size = 'medium', ...props }) => {
  return (
    <div className={styles.inputWrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <input className={`${styles.input} ${styles[size]} ${error ? styles.error : ''}`} {...props} />
      {helperText && <p className={styles.helperText}>{helperText}</p>}
    </div>
  );
};
