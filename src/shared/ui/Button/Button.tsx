import React from 'react';
import styles from './button.module.scss';

export type ButtonSize = 'large' | 'medium' | 'small' | 'xs';
export type ButtonProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  size?: ButtonSize;
};

export const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false, size = 'medium' }) => {
  return (
    <button
      className={`${styles.button} ${styles[size]} ${disabled ? styles.disabled : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
