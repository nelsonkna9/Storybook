import React from 'react';
import styles from './toggle.module.scss';

export interface ToggleProps {
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
}

export const Toggle: React.FC<ToggleProps> = ({ checked, disabled = false, onChange }) => {
  return (
    <div className={styles.toggleWrapper} onClick={() => !disabled && onChange(!checked)}>
      <div className={`${styles.toggleTrack} ${checked ? styles.checked : ''} ${disabled ? styles.disabled : ''}`}>
        <div className={styles.toggleThumb}></div>
      </div>
    </div>
  );
};
