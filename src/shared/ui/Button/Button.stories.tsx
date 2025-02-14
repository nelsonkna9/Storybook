import React from 'react';
import { Button, ButtonProps } from './Button';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const LargeRectangular = Template.bind({});
LargeRectangular.args = {
  label: 'Large Button',
  size: 'large',
  shape: 'rectangular',
  colorVariant: 'violet',
};

export const LargeCircular = Template.bind({});
LargeCircular.args = {
  label: 'Large Button',
  size: 'large',
  shape: 'circular',
  colorVariant: 'violet',
};

export const MediumRectangular = Template.bind({});
MediumRectangular.args = {
  label: 'Medium Button',
  size: 'medium',
  shape: 'rectangular',
  colorVariant: 'violet',
};

export const MediumCircular = Template.bind({});
MediumCircular.args = {
  label: 'Medium Button',
  size: 'medium',
  shape: 'circular',
  colorVariant: 'violet',
};

export const SmallRectangular = Template.bind({});
SmallRectangular.args = {
  label: 'Small Button',
  size: 'small',
  shape: 'rectangular',
  colorVariant: 'violet',
};

export const SmallCircular = Template.bind({});
SmallCircular.args = {
  label: 'Small Button',
  size: 'small',
  shape: 'circular',
  colorVariant: 'violet',
};

export const XSRectangular = Template.bind({});
XSRectangular.args = {
  label: 'XS Button',
  size: 'xs',
  shape: 'rectangular',
  colorVariant: 'violet',
};

export const XSCircular = Template.bind({});
XSCircular.args = {
  label: 'XS Button',
  size: 'xs',
  shape: 'circular',
  colorVariant: 'violet',
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  label: 'Disabled',
  size: 'medium',
  shape: 'rectangular',
  colorVariant: 'gray',
  disabled: true,
};
