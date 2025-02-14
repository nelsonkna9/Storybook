import React from 'react';
import { ColorPalette } from './ColorPalette';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Components/ColorPalette',
  component: ColorPalette,
} as Meta;

export const Default = () => <ColorPalette />;
