import { CardProps } from '../components/Card'
import ContactMapper from './mappers/ContactMapper'
import createHttpClient from './utils/HttpClient'

const contactsService = {
  httpClient: createHttpClient('http://localhost:3333'),

  async listContacts(orderBy: string): Promise<CardProps[]> {
    const contacts = await this.httpClient.get(`/contact/?orderBy=${orderBy}`)
    return (contacts as CardProps[]).map(ContactMapper.toDomain)
  },

  async getContactById(id: string): Promise<CardProps> {
    const contact = await this.httpClient.get(`/contact/${id}`)

    return ContactMapper.toDomain(contact as CardProps)
  },

  createContact(contact: CardProps) {
    const body = ContactMapper.toPersistance(contact)
    return this.httpClient.post('/contact', {
      body
    })
  },

  updateContact(id: string | undefined, contact: CardProps) {
    const body = ContactMapper.toPersistance(contact)
    return this.httpClient.put(`/contact/${id}`, { body })
  },

  deleteContact(id: string | undefined) {
    return this.httpClient.deleteContact(`/contact/${id}`)
  }
}

export default contactsService
