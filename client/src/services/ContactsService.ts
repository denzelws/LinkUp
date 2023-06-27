import { CardProps } from '../components/Card'
import createHttpClient from './utils/HttpClient'

const contactsService = {
  httpClient: createHttpClient('http://localhost:3333'),

  async listContacts(orderBy: string): Promise<CardProps[]> {
    return this.httpClient.get(`/contact/?orderBy=${orderBy}`)
  },

  async createContact(contact: CardProps) {
    return this.httpClient.post('/contact', {
      body: contact
    })
  }
}

export default contactsService
