import { Router } from 'express'
import {
  deleteCategory,
  indexCategory,
  storeCategory,
  updateCategory
} from './app/controllers/CategoryController'
import {
  deleteContact,
  index,
  show,
  store,
  update
} from './app/controllers/ContactController'

const router = Router()

// contacts
router.post('/contact', store)
router.get('/contact', index)
router.get('/contact/:id', show)
router.put('/contact/:id', update)
router.delete('/contact/:id', deleteContact)

// categories
router.get('/categories', indexCategory)
router.post('/categories', storeCategory)
router.put('/categories/:id', updateCategory)
router.delete('/categories/:id', deleteCategory)

export default router
