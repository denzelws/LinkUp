import { Router } from 'express'
import { deleteContact, index, show } from './app/controllers/ContactController'

const router = Router()

router.get('/contact', index)
router.get('/contact/:id', show)
router.delete('/contact/:id', deleteContact)

export default router
