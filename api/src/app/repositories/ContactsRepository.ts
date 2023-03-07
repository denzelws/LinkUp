export type Contacts = {
  id: string
  name: string
  email: string
}

const contacts = [
  {
    id: '01',
    name: 'john',
    email: 'teste@gmail.com'
  }
]

export const ContactsRepository = {
  findAll(): Contacts[] {
    return contacts
  }
}
