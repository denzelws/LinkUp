import { QueryResult } from 'pg'
import { v4 } from 'uuid'

import { db } from '../../database'

export type Contacts = {
  id: string
  name: string
  email: string
  phone?: number | null
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
  async findAll(orderBy: 'ASC' | 'DESC'): Promise<Contacts[]> {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC'
    const rows = await db.query(
      `SELECT * FROM contacts ORDER BY name ${direction}`
    )

    return rows
  },

  async findById(id: string): Promise<Contacts[]> {
    const row = await db.query('SELECT * FROM contacts WHERE id = $1', [id])

    return row
  },

  async findByEmail(email: string): Promise<Contacts[]> {
    const row = await db.query('SELECT * FROM contacts WHERE email = $1', [
      email
    ])

    return row
  },

  async create(contact: Contacts) {
    const { name, email, phone, category_id } = contact
    const row = (await db.query(
      `
       INSERT INTO contacts(name, email, phone, category_id)
       VALUES($1, $2, $3, $4)
       RETURNING *
       `,
      [name, email, phone as number | null, category_id]
    )) as unknown as QueryResult<Contacts>

    return row
  },

  update({ id, name, email, phone, category_id }: Contacts) {
    const updatedContact = {
      id,
      name,
      email,
      phone,
      category_id
    }

    const updatedContacts = contacts.map((contact) =>
      contact.id === id ? updatedContact : contact
    )

    contacts.splice(0, contacts.length, ...updatedContacts)

    return updatedContact
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
