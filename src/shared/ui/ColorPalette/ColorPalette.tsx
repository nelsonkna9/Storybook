import React from 'react';
import styles from './colorPalette.module.scss';

const colors = [
  { name: 'White Main', variable: '--white-main' },
  { name: 'White 600', variable: '--white-600' },
  { name: 'White 500', variable: '--white-500' },
  { name: 'White 400', variable: '--white-400' },
  { name: 'White 300', variable: '--white-300' },
  { name: 'White 200', variable: '--white-200' },
  { name: 'White 100', variable: '--white-100' },

  { name: 'Black Main', variable: '--black-main' },
  { name: 'Black 600', variable: '--black-600' },
  { name: 'Black 500', variable: '--black-500' },
  { name: 'Black 400', variable: '--black-400' },
  { name: 'Black 300', variable: '--black-300' },
  { name: 'Black 200', variable: '--black-200' },
  { name: 'Black 100', variable: '--black-100' },

  { name: 'Purple Main', variable: '--purple-main' },
  { name: 'Purple 800', variable: '--purple-800' },
  { name: 'Purple 700', variable: '--purple-700' },
  { name: 'Purple 600', variable: '--purple-600' },
  { name: 'Purple 500', variable: '--purple-500' },
  { name: 'Purple 400', variable: '--purple-400' },
  { name: 'Purple 300', variable: '--purple-300' },
  { name: 'Purple 200', variable: '--purple-200' },
  { name: 'Purple 100', variable: '--purple-100' },

  { name: 'Red Main', variable: '--red-main' },
  { name: 'Red 800', variable: '--red-800' },
  { name: 'Red 700', variable: '--red-700' },
  { name: 'Red 600', variable: '--red-600' },
  { name: 'Red 500', variable: '--red-500' },
  { name: 'Red 400', variable: '--red-400' },
  { name: 'Red 300', variable: '--red-300' },
  { name: 'Red 200', variable: '--red-200' },
  { name: 'Red 100', variable: '--red-100' },
];

export const ColorPalette: React.FC = () => {
  return (
    <div className={styles.palette}>
      {colors.map((color) => (
        <div key={color.name} className={styles.swatch}>
          <div className={styles.colorBox} style={{ backgroundColor: `var(${color.variable})` }}></div>
          <span className={styles.colorLabel}>{color.name}</span>
        </div>
      ))}
    </div>
  );
};
