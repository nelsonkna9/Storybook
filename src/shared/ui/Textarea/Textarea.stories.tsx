import React from 'react';
import { Textarea, TextareaProps } from './Textarea';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Components/Textarea',
  component: Textarea,
} as Meta;

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;

export const Large = Template.bind({});
Large.args = {
  label: 'Large Text Area',
  placeholder: 'Large Text Area',
  helperText: 'This is a helper text',
  size: 'large',
};

export const Medium = Template.bind({});
Medium.args = {
  label: 'Medium Text Area',
  placeholder: 'Medium Text Area',
  helperText: 'This is a helper text',
  size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Small Text Area',
  placeholder: 'Small Text Area',
  helperText: 'This is a helper text',
  size: 'small',
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  label: 'Error Text Area',
  placeholder: 'Text Area with error',
  helperText: 'This is a helper text',
  error: true,
  size: 'medium',
};
