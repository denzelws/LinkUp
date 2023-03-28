import { Story, Meta } from '@storybook/react/types-6-0'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => (
  <div style={{ maxWidth: '30rem', margin: '0 auto' }}>
    <Button {...args}>Salvar alterações</Button>
  </div>
)

Default.args = {
  children: 'Salvar alterações'
}

export const DisabledButton: Story<ButtonProps> = (args) => (
  <div style={{ maxWidth: '30rem', margin: '0 auto' }}>
    <Button disabled {...args}>
      Salvar alterações
    </Button>
  </div>
)

DisabledButton.args = {
  children: 'Salvar alterações'
}
