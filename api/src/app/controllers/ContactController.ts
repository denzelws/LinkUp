import { Request, Response } from 'express'
import {
  Contacts,
  ContactsRepository
} from '../repositories/ContactsRepository'

export const index = (req: Request, res: Response) => {
  const contacts: Contacts[] = ContactsRepository.findAll()
  res.json(contacts)
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
