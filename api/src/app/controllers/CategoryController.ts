import { Request, Response } from 'express'
import {
  CategoryProps,
  CategoryRepository
} from '../repositories/CategoryRepository'

export const indexCategory = async (req: Request, res: Response) => {
  const { orderBy } = req.query

  let orderDirection: 'ASC' | 'DESC' = 'ASC'

  if (typeof orderBy === 'string' && orderBy.match(/^(asc|desc)$/i)) {
    orderDirection = orderBy.toUpperCase() as 'ASC' | 'DESC'
  }

  const categories: CategoryProps[] = await CategoryRepository.findAll(
    orderDirection
  )
  res.json(categories)
}

export const storeCategory = async (req: Request, res: Response) => {
  const { id, name } = req.body

  if (!name) {
    return res.status(400).json({ Error: 'Name is required' })
  }

  const category = await CategoryRepository.create({
    id,
    name
  })

  return res.json(category)
}
