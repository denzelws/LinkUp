import { Client } from 'pg'
import { Contacts } from '../app/repositories/ContactsRepository'

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'mycontacts'
})

client.connect()

export const Query = async (query: string): Promise<Contacts[]> => {
  const { rows } = await client.query(query)
  return rows
}

Query('SELECT * FROM contacts').then(console.log)
