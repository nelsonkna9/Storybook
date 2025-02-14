import React from 'react';
import styles from './checkbox.module.scss';

export type CheckboxProps = {
  label: string;
  checked: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
};

export const Checkbox: React.FC<CheckboxProps> = ({ label, checked, indeterminate = false, disabled = false, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <div className={styles.checkboxWrapper}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        ref={(input) => {
          if (input) {
            input.indeterminate = indeterminate;
          }
        }}
      />
      <label className={styles.label}>{label}</label>
    </div>
  );
};
