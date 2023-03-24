import { Story, Meta } from '@storybook/react/types-6-0'
import { Mail, Search } from '@styled-icons/material-outlined'

import TextField, { TextFieldProps } from '.'

export default {
  title: 'TextField',
  component: TextField,
  args: {
    icon: <Search />
  }
} as Meta

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, margin: '0 auto' }}>
    <TextField {...args} />
  </div>
)
