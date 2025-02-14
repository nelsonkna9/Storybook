import React, { useState } from 'react';
import styles from './dropdown.module.scss';

export interface DropdownProps {
  label?: string;
  helperText?: string;
  options: string[];
  selected?: string;
  disabled?: boolean;
  error?: boolean;
  onSelect: (option: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  helperText,
  options,
  selected,
  disabled = false,
  error = false,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownWrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <div
        className={`${styles.dropdown} ${disabled ? styles.disabled : ''} ${error ? styles.error : ''}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <span>{selected || 'Select an option'}</span>
      </div>
      {isOpen && (
        <ul className={styles.options}>
          {options.map((option) => (
            <li key={option} className={styles.option} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
      {helperText && <p className={styles.helperText}>{helperText}</p>}
    </div>
  );
};
