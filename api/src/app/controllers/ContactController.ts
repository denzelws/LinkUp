import { Request, Response } from 'express'
import {
  Contacts,
  ContactsRepository
} from '../repositories/ContactsRepository'

export const index = (req: Request, res: Response) => {
  const contacts: Contacts[] = ContactsRepository.findAll()
  res.json(contacts)
}

export const store = (req: Request, res: Response) => {
  const { id, name, email, phone, category_id } = req.body

  if (!name) {
    return res.status(400).json({ Error: 'Name is required' })
  }

  const contactExists: Contacts | null = ContactsRepository.findByEmail(email)

  if (contactExists) {
    return res.status(400).json({ Error: 'This e-mail has already been taken' })
  }

  const contact = ContactsRepository.create({
    id,
    name,
    email,
    phone,
    category_id
  })

  res.json(contact)
}

export const show = (req: Request, res: Response) => {
  const { id } = req.params

  const contact: Contacts | null = ContactsRepository.findById(id)

  if (!contact) {
    return res.status(404).json({ error: 'User not found' })
  }

  res.json(contact)
}

export const deleteContact = (req: Request, res: Response) => {
  const { id } = req.params

  const contact: Contacts | null = ContactsRepository.findById(id)

  if (!contact) {
    return res.status(404).json({ error: 'User not found' })
  }

  ContactsRepository.delete(id)
  res.sendStatus(204)
}
