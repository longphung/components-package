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
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

const TemplateTwoSelect: ComponentStory<any> = (args: any) => (
  <div>
    <Select {...args} />
    <Select {...args} />
  </div>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  options: [
    {
      text: 'Test 1',
      value: 'test1',
    },
    {
      text: 'Test 2',
      value: 'test2',
    },
    {
      text: 'Test 3',
      value: 'test3',
    },
  ],
  placeholder: 'Enter here',
};

export const TwoSelect = TemplateTwoSelect.bind({});
TwoSelect.args = {
  options: [
    {
      text: 'Test 1',
      value: 'test1',
    },
    {
      text: 'Test 2',
      value: 'test2',
    },
    {
      text: 'Test 3',
      value: 'test3',
    },
  ],
  placeholder: 'Enter here',
};

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
