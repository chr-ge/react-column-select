import React from 'react'
import { Story, Meta } from '@storybook/react'

import ColumnSelect, { options } from './ColumnSelect'

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
    columnBorderColor: {
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
    buttonHoverBgColor: {
      control: 'color',
      table: {
        category: 'Colors',
      },
    },
    buttonDisabledBgColor: {
      control: 'color',
      table: {
        category: 'Colors',
      },
    },
    optionHoverBgColor: {
      control: 'color',
      table: {
        category: 'Colors',
      },
    },
    optionSelectedBgColor: {
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
    columnBorderColor: args.secondary ?? '#cfa4ff',
    textColor: '#000000',
    columnBgColor: args.columnBgColor ?? '#CBD5E0',
    buttonBgColor: args.buttonBgColor ?? '#CBD5E0',
    buttonHoverBgColor: args.buttonHoverBgColor ?? '#CBD5E0',
    buttonDisabledBgColor: args.buttonDisabledBgColor ?? '#CBD5E0',
    searchFocusBorderColor: args.searchFocusBorderColor ?? '#805Ad5',
    optionHoverBgColor: args.optionHoverBgColor ?? '#CBD5E0',
    optionSelectedBgColor: args.optionSelectedBgColor ?? '#CBD5E0',
  }
  return <ColumnSelect theme={theme} {...args} />
}

export const Default = Template.bind({})

export const DisabledDoubleClick = Template.bind({})
DisabledDoubleClick.args = { ...Default.args, disableDoubleClick: true }

export const DisabledKeyboard = Template.bind({})
DisabledKeyboard.args = { ...Default.args, disableKeyboard: true }

export const DefaultValues = Template.bind({})
DefaultValues.args = { ...Default.args, defaultValue: [options[1], options[2]] }

export const Max = Template.bind({})
Max.args = { ...Default.args, max: 3 }

export const Searchable = Template.bind({})
Searchable.args = {
  ...Default.args,
  isSearchable: true,
  searchFocusBorderColor: '',
}

export const DisableAllButtons = Template.bind({})
DisableAllButtons.args = { ...Default.args, disableAllButtons: true }
