import { QueryResult } from 'pg'

import { db } from '../../database'

export type Contacts = {
  id: string
  name: string
  email: string
  phone?: number | null
  category_id: string
}

export const ContactsRepository = {
  async findAll(orderBy: 'ASC' | 'DESC'): Promise<Contacts[]> {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC'
    const rows = await db.query(
      `SELECT * FROM contacts ORDER BY name ${direction}`
    )

    return rows
  },

  async findById(id: string): Promise<Contacts | null> {
    const row = await db.query('SELECT * FROM contacts WHERE id = $1', [id])
    return row.length ? row[0] : null
  },

  async findByEmail(email: string): Promise<Contacts | null> {
    const row = await db.query('SELECT * FROM contacts WHERE email = $1', [
      email
    ])

    return row.length ? row[0] : null
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

  async update({ id, name, email, phone, category_id }: Contacts) {
    const row = await db.query(
      `
     UPDATE contacts
     SET name = $1, email = $2, phone = $3, category_id = $4
     WHERE id = $5
     RETURNING *
     `,
      [name, email, phone as number | null, category_id, id]
    )

    return row
  },

  async delete(id: string): Promise<Contacts[]> {
    const deleteOp = await db.query('DELETE FROM contacts WHERE id = $1', [id])

    return deleteOp
  }
}
