import React from 'react'
import { Story, Meta } from '@storybook/react'

import ColumnSelect, { options } from './ColumnSelect'

export default {
  title: 'Example/Column Select',
  component: ColumnSelect,
  argTypes: {
    headerBgColor: {
      control: 'color',
      defaultValue: '#D6B1FF',
      table: {
        category: 'Colors',
      },
    },
    columnBorderColor: {
      control: 'color',
      defaultValue: '#CFA4FF',
      table: {
        category: 'Colors',
      },
    },
    columnBgColor: {
      control: 'color',
      defaultValue: '#CBD5E0',
      table: {
        category: 'Colors',
      },
    },
    textColor: {
      control: 'color',
      defaultValue: '#000000',
      table: {
        category: 'Colors',
      },
    },
    buttonBgColor: {
      control: 'color',
      defaultValue: '#CBD5E0',
      table: {
        category: 'Colors',
      },
    },
    optionSelectedBgColor: {
      control: 'color',
      defaultValue: '#EDF2F7',
      table: {
        category: 'Colors',
      },
    },
    optionHoverBgColor: {
      control: 'color',
      defaultValue: '#FAFBFC',
      table: {
        category: 'Colors',
      },
    },
  },
} as Meta

const Template: Story = (args) => {
  const theme = {
    headerBgColor: args.headerBgColor,
    columnBorderColor: args.columnBorderColor,
    columnBgColor: args.columnBgColor,
    textColor: args.textColor,
    buttonBgColor: args.buttonBgColor,
    optionSelectedBgColor: args.optionSelectedBgColor,
    optionHoverBgColor: args.optionHoverBgColor,
    searchFocusBorderColor: args.searchFocusBorderColor,
  }
  return <ColumnSelect theme={theme} {...args} />
}

export const Default = Template.bind({})

export const DisabledDoubleClick = Template.bind({})
DisabledDoubleClick.args = { ...Default.args, disableDoubleClick: true }

export const DisabledKeyboard = Template.bind({})
DisabledKeyboard.args = { ...Default.args, disableKeyboard: true }

export const DefaultValues = Template.bind({})
DefaultValues.args = { ...Default.args, defaultValue: options.slice(1, 3) }

export const Max = Template.bind({})
Max.args = { ...Default.args, max: 3 }

export const Searchable = Template.bind({})
Searchable.args = {
  ...Default.args,
  isSearchable: true,
}
Searchable.argTypes = {
  searchFocusBorderColor: {
    control: 'color',
    defaultValue: '#805Ad5',
  },
}

export const DisableAllButtons = Template.bind({})
DisableAllButtons.args = { ...Default.args, disableAllButtons: true }
