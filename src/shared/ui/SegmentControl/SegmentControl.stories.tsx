import React, { useState } from 'react';
import { SegmentControl, SegmentControlProps } from './SegmentControl';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Components/SegmentControl',
  component: SegmentControl,
} as Meta;

const Template: Story<SegmentControlProps> = (args) => {
  const [selected, setSelected] = useState(args.selected);
  return <SegmentControl {...args} selected={selected} onSelect={setSelected} />;
};

export const MasterVariant = Template.bind({});
MasterVariant.args = {
  label: 'Master Segmented Control',
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  selected: 'Option 1',
  variant: 'master',
  size: 'medium',
};

export const ClearVariant = Template.bind({});
ClearVariant.args = {
  label: 'Clear Segmented Control',
  options: ['Option 1', 'Option 2', 'Option 3'],
  selected: 'Option 2',
  variant: 'clear',
  size: 'medium',
};
