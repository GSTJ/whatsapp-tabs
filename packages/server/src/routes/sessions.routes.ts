import rateLimit from 'express-rate-limit'
import express from 'express'
import SessionsController from '../controllers/SessionsController'

const router = express.Router()

const authLimiter = rateLimit({
  windowMs: 30 * 60 * 1000,
  max: 20,
  message: 'Você excedeu o limite de envios. Tente novamente em 30 minutos.'
})

router.post('/', authLimiter, SessionsController.create)

export default router
