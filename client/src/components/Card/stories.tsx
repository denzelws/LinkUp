import { Story, Meta } from '@storybook/react/types-6-0'
import Card, { CardProps } from '.'

export default {
  title: 'Card',
  component: Card,
  args: {
    name: 'Denzel Washington',
    platform: 'Instagram',
    email: 'test@gmail.com',
    phone: '9999999'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<CardProps> = (args) => (
  <div style={{ maxWidth: '50rem', margin: '0 auto' }}>
    <Card {...args} />
    <Card {...args} />
    <Card {...args} />
  </div>
)
