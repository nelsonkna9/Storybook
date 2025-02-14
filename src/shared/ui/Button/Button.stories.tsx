import React from 'react';
import { Button, ButtonProps } from './Button';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Large = Template.bind({});
Large.args = {
  label: 'Large Button',
  size: 'large',
};

export const Medium = Template.bind({});
Medium.args = {
  label: 'Medium Button',
  size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Small Button',
  size: 'small',
};

export const XS = Template.bind({});
XS.args = {
  label: 'XS Button',
  size: 'xs',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  size: 'medium',
  disabled: true,
};
