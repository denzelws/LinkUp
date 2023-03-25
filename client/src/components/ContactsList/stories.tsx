import { Story, Meta } from '@storybook/react/types-6-0'
import ContactsList from '.'

export default {
  title: 'ContactsList',
  component: ContactsList
} as Meta

export const Default: Story = () => <ContactsList />
