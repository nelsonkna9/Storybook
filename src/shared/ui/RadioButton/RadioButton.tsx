import React from 'react';
import styles from './radioButton.module.scss';

export interface RadioButtonProps {
  name: string;
  value: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (value: string) => void;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  value,
  checked,
  disabled = false,
  onChange,
}) => {
  return (
    <label className={styles.radioLabel}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={() => onChange(value)}
        className={styles.radioInput}
      />
      <span className={styles.radioCustom}></span>
      <span className={styles.radioText}>{value}</span>
    </label>
  );
};
