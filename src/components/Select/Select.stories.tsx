import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Select from './Select';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Select',
  component: Select,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => <Select />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: 'Select',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Select',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Select',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Select',
// };
