import React from 'react';
import styles from './checkbox.module.scss';

export interface CheckboxProps {
  label: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, checked, disabled = false, onChange }) => {
  return (
    <label className={styles.checkboxLabel}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        className={styles.checkboxInput}
      />
      <span className={styles.checkboxCustom}></span>
      <span className={styles.checkboxText}>{label}</span>
    </label>
  );
};
