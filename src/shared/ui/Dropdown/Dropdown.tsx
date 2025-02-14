import React, { useState } from 'react';
import styles from './dropdown.module.scss';

export type DropdownProps = {
  label?: string;
  helperText?: string;
  options: string[];
  selected?: string;
  disabled?: boolean;
  onSelect: (option: string) => void;
};

export const Dropdown: React.FC<DropdownProps> = ({ label, helperText, options, selected, disabled = false, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleSelect = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownWrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={`${styles.dropdown} ${disabled ? styles.disabled : ''}`} onClick={() => !disabled && setIsOpen(!isOpen)}>
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
