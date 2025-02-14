import React, { useState } from 'react';
import { Toggle, ToggleProps } from './Toggle';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Components/Toggle',
  component: Toggle,
} as Meta;

const Template: Story<ToggleProps> = (args) => {
  const [checked, setChecked] = useState(args.checked);
  return <Toggle {...args} checked={checked} onChange={setChecked} />;
};

export const Default = Template.bind({});
Default.args = {
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  checked: false,
  disabled: true,
};
