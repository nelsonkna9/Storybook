import React from 'react';
import { FileUpload, FileUploadProps } from './FileUpload';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Components/FileUpload',
  component: FileUpload,
} as Meta;

const Template: Story<FileUploadProps> = (args) => <FileUpload {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'File Upload 3.32 mb',
  helperText: 'This is a helper text',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'File Upload 3.32 mb',
  helperText: 'This is a helper text',
  disabled: true,
};
