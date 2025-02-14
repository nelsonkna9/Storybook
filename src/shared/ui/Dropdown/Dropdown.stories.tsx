import React, { useState } from 'react';
import { Dropdown, DropdownProps } from './Dropdown';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as Meta;

const Template: Story<DropdownProps> = (args) => {
  const [selected, setSelected] = useState(args.selected);
  return <Dropdown {...args} selected={selected} onSelect={setSelected} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Master Dropdown',
  helperText: 'This is a helper text',
  options: ['First option', 'Second option', 'Third option', 'Fourth option'],
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Dropdown',
  helperText: 'This is a helper text',
  options: ['Option 1', 'Option 2'],
  disabled: true,
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  label: 'Dropdown with Error',
  helperText: 'This is a helper text',
  options: ['Option 1', 'Option 2'],
  error: true,
};
