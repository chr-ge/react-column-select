import React from 'react'
import { Story, Meta } from '@storybook/react'

import ColumnSelect from './ColumnSelect'

export default {
  title: 'Example/Column Select',
  component: ColumnSelect,
} as Meta

const Template: Story = (args) => <ColumnSelect {...args} />

export const Default = Template.bind({})
