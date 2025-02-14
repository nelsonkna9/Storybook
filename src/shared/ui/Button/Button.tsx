import React from 'react';
import styles from './button.module.scss';

export type ButtonSize = 'large' | 'medium' | 'small' | 'xs';
export type ButtonShape = 'rectangular' | 'circular';
export type ButtonColorVariant = 'violet' | 'red' | 'gray';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  size: ButtonSize;
  shape: ButtonShape;
  colorVariant?: ButtonColorVariant;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  size,
  shape,
  colorVariant = 'violet',
}) => {
  // Construit la classe basée sur la taille et la forme, par exemple "largeRect" ou "mediumCirc"
  const sizeShapeClass = styles[`${size}${shape === 'rectangular' ? 'Rect' : 'Circ'}`];
  const colorClass = styles[colorVariant];
  const disabledClass = disabled ? styles.disabled : '';
  const classNames = [styles.button, sizeShapeClass, colorClass, disabledClass].join(' ');
  
  return (
    <button className={classNames} onClick={onClick} disabled={disabled}>
      {shape === 'circular' ? '+' : label}
    </button>
  );
};
