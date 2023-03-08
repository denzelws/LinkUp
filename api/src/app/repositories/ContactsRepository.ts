import { v4 } from 'uuid'

export type Contacts = {
  id: string
  name: string
  email: string
}

const contacts = [
  {
    id: v4(),
    name: 'john',
    email: 'teste@gmail.com'
  },
  {
    id: v4(),
    name: 'harry',
    email: 'harry@gmail.com'
  }
]

export const ContactsRepository = {
  findAll(): Contacts[] {
    return contacts
  },

  findById(id: string): Contacts | null {
    const contact = contacts.find((contact) => contact.id === id)
    return contact ? contact : null
  },

  delete(id: string): Contacts | null {
    const index = contacts.findIndex((contact) => contact.id === id)
    if (index === -1) {
      return null
    } else {
      const contact = contacts[index]
      contacts.splice(index, 1)
      return contact
    }
  }
}
