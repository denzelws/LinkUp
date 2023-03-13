import { Router } from 'express'
import {
  // deleteContact,
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
// router.delete('/contact/:id', deleteContact)

export default router
