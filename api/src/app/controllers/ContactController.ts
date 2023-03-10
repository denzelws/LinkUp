import { Request, Response } from 'express'
import {
  Contacts,
  ContactsRepository
} from '../repositories/ContactsRepository'

export const index = async (req: Request, res: Response): Promise<void> => {
  const { orderBy } = req.query

  let orderDirection: 'ASC' | 'DESC' = 'ASC'

  if (typeof orderBy === 'string' && orderBy.match(/^(asc|desc)$/i)) {
    orderDirection = orderBy.toUpperCase() as 'ASC' | 'DESC'
  }

  const contacts: Contacts[] = await ContactsRepository.findAll(orderDirection)
  res.json(contacts)
}

export const store = async (req: Request, res: Response) => {
  const { id, name, email, phone, category_id } = req.body

  if (!name) {
    return res.status(400).json({ Error: 'Name is required' })
  }

  const contactExists: Contacts[] = await ContactsRepository.findByEmail(email)

  if (contactExists.length > 0) {
    return res.status(400).json({ Error: 'This e-mail is already in use' })
  }

  const contact = await ContactsRepository.create({
    id,
    name,
    email,
    phone,
    category_id
  })

  return res.json(contact)
}

export const show = async (req: Request, res: Response) => {
  const { id } = req.params

  const contact: Contacts[] = await ContactsRepository.findById(id)

  if (!contact) {
    return res.status(404).json({ error: 'User not found' })
  }

  res.json(contact)
}

// export const update = (req: Request, res: Response) => {
//   const { id } = req.params

//   const { name, email, phone, category_id } = req.body

//   if (!name) {
//     return res.status(400).json({ Error: 'User not found ' })
//   }

//   const contactsExists = ContactsRepository.findById(id)

//   if (!contactsExists) {
//     return res.status(400).json({ Error: 'User not found' })
//   }

//   const contactByEmail = ContactsRepository.findByEmail(email)

//   if (contactByEmail && contactByEmail.id !== id) {
//     return res.status(400).json({ Error: 'This e-mail is already in use' })
//   }

//   const contact = ContactsRepository.update({
//     id,
//     name,
//     email,
//     phone,
//     category_id
//   })

//   res.json(contact)
// }

export const deleteContact = async (req: Request, res: Response) => {
  const { id } = req.params

  const contact: Contacts[] = await ContactsRepository.findById(id)

  if (!contact) {
    return res.status(404).json({ error: 'User not found' })
  }

  ContactsRepository.delete(id)
  res.sendStatus(204)
}
