import { Client } from 'pg'
import { Contacts } from '../app/repositories/ContactsRepository'

export const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'mycontacts'
})

export const db = {
  async query(
    query: string,
    values?: (string | number | null)[]
  ): Promise<Contacts[]> {
    const { rows } = await client.query(query, values)
    return rows
  }
}
