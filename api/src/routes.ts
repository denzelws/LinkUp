import { Router } from 'express'
import {
  indexCategory,
  storeCategory
} from './app/controllers/CategoryController'
import {
  deleteContact,
  index,
  show,
  store,
  update
} from './app/controllers/ContactController'

const router = Router()

router.post('/contact', store)
router.get('/contact', index)
router.get('/contact/:id', show)
router.put('/contact/:id', update)
router.delete('/contact/:id', deleteContact)

router.get('/categories', indexCategory)
router.post('/categories', storeCategory)

export default router
