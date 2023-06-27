import { Request, Response } from 'express'
import {
  Contacts,
  ContactsRepository
} from '../repositories/ContactsRepository'

import isValidUUID from '../utils/isValidUUID'

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
  const { name, email, phone, category_id } = req.body

  console.log('Received request payload:', req.body)

  if (!name) {
    console.log('Name is missing or empty')
    return res.status(400).json({ Error: 'Name is required' })
  }

  if (category_id && !isValidUUID(category_id)) {
    console.log('Invalid category')
    return res.status(400).json({ Error: 'Invalid category' })
  }

  if (email) {
    const contactExists = await ContactsRepository.findByEmail(email)
    if (contactExists) {
      console.log('Email already exists:', email)
      return res.status(400).json({ Error: 'This e-mail is already in use' })
    }
  }

  try {
    const contact = await ContactsRepository.create({
      id: '',
      name,
      email: email || null,
      phone,
      category_id: category_id || null
    })

    console.log('Contact created:', contact)
    return res.json(contact)
  } catch (error) {
    console.log('Error creating contact:', error)
    return res.status(500).json({ Error: 'Failed to create contact' })
  }
}

export const show = async (req: Request, res: Response) => {
  const { id } = req.params

  if (!isValidUUID(id)) {
    return res.status(400).json({ error: 'Invalid user id' })
  }

  const contact: Contacts | null = await ContactsRepository.findById(id)

  if (!contact) {
    return res.status(404).json({ error: 'User not found' })
  }

  res.json(contact)
}

export const update = async (req: Request, res: Response) => {
  const { id } = req.params

  const { name, email, phone, category_id } = req.body

  if (!isValidUUID(id)) {
    return res.status(400).json({ error: 'Invalid user id' })
  }

  if (category_id && !isValidUUID(category_id)) {
    return res.status(400).json({ error: 'Invalid category' })
  }

  if (!name) {
    return res.status(400).json({ Error: 'User not found ' })
  }

  const contactsExists = await ContactsRepository.findById(id)

  if (!contactsExists) {
    return res.status(400).json({ Error: 'User not found' })
  }

  if (email) {
    const contactByEmail = await ContactsRepository.findByEmail(email)
    if (contactByEmail && contactByEmail.id !== id) {
      return res.status(400).json({ Error: 'This e-mail is already in use' })
    }
  }

  const contact = await ContactsRepository.update({
    id,
    name,
    email: email || null,
    phone,
    category_id: category_id || null
  })

  res.json(contact)
}

export const deleteContact = async (req: Request, res: Response) => {
  const { id } = req.params

  if (!isValidUUID(id)) {
    return res.status(400).json({ error: 'Invalid user id' })
  }

  await ContactsRepository.delete(id)

  res.sendStatus(204)
}
