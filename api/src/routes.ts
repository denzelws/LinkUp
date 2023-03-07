import { Router } from 'express'
import { index } from './app/controllers/ContactController'

const router = Router()

router.get('/contact', index)

export default router
