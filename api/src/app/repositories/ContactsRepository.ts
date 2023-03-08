import { v4 } from 'uuid'

export type Contacts = {
  id: string
  name: string
  email: string
  phone?: number
  category_id: string
}

const contacts = [
  {
    id: v4(),
    name: 'john',
    email: 'teste@gmail.com',
    category_id: v4()
  },
  {
    id: v4(),
    name: 'harry',
    email: 'harry@gmail.com',
    category_id: v4()
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

  findByEmail(email: string): Contacts | null {
    const contact = contacts.find((contact) => contact.email === email)
    return contact ? contact : null
  },

  create({ name, email, phone, category_id }: Contacts) {
    const newContact = {
      id: v4(),
      name,
      email,
      phone,
      category_id
    }

    contacts.push(newContact)
    return newContact
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
