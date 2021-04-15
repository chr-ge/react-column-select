import React from 'react'
import { Story, Meta } from '@storybook/react'

import ColumnSelect from './ColumnSelect'

export default {
  title: 'Example/Column Select',
  component: ColumnSelect,
  argTypes: {
    headerBgColor: {
      control: 'color',
      table: {
        category: 'Colors',
      },
    },
    secondary: {
      control: 'color',
      table: {
        category: 'Colors',
      },
    },
    columnBgColor: {
      control: 'color',
      table: {
        category: 'Colors',
      },
    },
    buttonBgColor: {
      control: 'color',
      table: {
        category: 'Colors',
      },
    },
  },
} as Meta

const Template: Story = (args) => {
  const theme = {
    headerBgColor: args.headerBgColor ?? '#d6b1ff',
    secondary: args.secondary ?? '#cfa4ff',
    textColor: '#000000',
    columnBgColor: args.columnBgColor ?? '#CBD5E0',
    buttonBgColor: args.buttonBgColor ?? '#CBD5E0',
  }
  return <ColumnSelect theme={theme} {...args} />
}

export const Default = Template.bind({})

export const DisabledDoubleClick = Template.bind({})
DisabledDoubleClick.args = { ...Default.args, disableDoubleClick: true }

export const DisabledKeyboard = Template.bind({})
DisabledKeyboard.args = { ...Default.args, disableKeyboard: true }
