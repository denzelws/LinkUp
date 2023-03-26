import { Story, Meta } from '@storybook/react/types-6-0'
import ContactsList, { ContactsListProps } from '.'

import cards from '../CardSlider/mock'

export default {
  title: 'ContactsList',
  component: ContactsList
} as Meta

export const Default: Story<ContactsListProps> = () => <ContactsList />
