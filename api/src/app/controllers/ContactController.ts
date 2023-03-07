import { Request, Response } from 'express'
import {
  Contacts,
  ContactsRepository
} from '../repositories/ContactsRepository'

export const index = (req: Request, res: Response) => {
  const contacts: Contacts[] = ContactsRepository.findAll()
  res.json(contacts)
}
