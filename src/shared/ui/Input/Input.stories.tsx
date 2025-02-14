import React from 'react';
import { Input, InputProps } from './Input';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Large = Template.bind({});
Large.args = {
  label: 'Large label',
  placeholder: 'Large Input',
  helperText: 'This is a helper text',
  size: 'large',
};

export const Medium = Template.bind({});
Medium.args = {
  label: 'Medium label',
  placeholder: 'Medium Input',
  helperText: 'This is a helper text',
  size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Small label',
  placeholder: 'Small Input',
  helperText: 'This is a helper text',
  size: 'small',
};

export const XS = Template.bind({});
XS.args = {
  label: 'XSmall label',
  placeholder: 'XSmall Input',
  helperText: 'This is a helper text',
  size: 'xs',
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  label: 'Error label',
  placeholder: 'Input with error',
  helperText: 'This is a helper text',
  error: true,
  size: 'medium',
};
