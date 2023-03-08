import { Router } from 'express'
import {
  deleteContact,
  index,
  show,
  store
} from './app/controllers/ContactController'

const router = Router()

router.post('/contact', store)
router.get('/contact', index)
router.get('/contact/:id', show)
router.delete('/contact/:id', deleteContact)

export default router
