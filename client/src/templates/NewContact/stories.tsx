import { Story, Meta } from '@storybook/react/types-6-0'
import NewContact from '.'

export default {
  title: 'NewContact',
  component: NewContact
} as Meta

export const Default: Story = () => <NewContact />
