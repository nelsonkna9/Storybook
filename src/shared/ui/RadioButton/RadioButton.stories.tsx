import React, { useState } from 'react';
import { RadioButton, RadioButtonProps } from './RadioButton';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
} as Meta;

const Template: Story<RadioButtonProps> = (args) => {
  const [selected, setSelected] = useState('');
  return <RadioButton {...args} checked={selected === args.value} onChange={setSelected} />;
};

export const Default = Template.bind({});
Default.args = {
  name: 'radio-group',
  value: 'Option 1',
  checked: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'radio-group',
  value: 'Option Disabled',
  checked: false,
  disabled: true,
};
