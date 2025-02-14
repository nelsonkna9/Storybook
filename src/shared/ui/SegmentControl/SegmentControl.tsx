import React from 'react';
import styles from './segmentControl.module.scss';

export type SegmentControlProps = {
  label?: string;
  options: string[];
  selected: string;
  onSelect: (option: string) => void;
  variant?: 'master' | 'clear';
  size?: 'large' | 'medium' | 'small' | 'xs';
};

export const SegmentControl: React.FC<SegmentControlProps> = ({
  label,
  options,
  selected,
  onSelect,
  variant = 'master',
  size = 'medium'
}) => {
  return (
    <div className={styles.segmentControlWrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={`${styles.segmentControl} ${styles[variant]} ${styles[size]}`}>
        {options.map(option => (
          <div
            key={option}
            className={`${styles.segmentOption} ${selected === option ? styles.active : ''}`}
            onClick={() => onSelect(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};
