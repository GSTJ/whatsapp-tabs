import sessionsRoutes from './sessions.routes'
import messageRoutes from './message.routes'
import statusRoutes from './status.routes'
import Files from './files'
import cookieParser from 'cookie-parser'
import AppError from '../errors/AppError'
import cors from 'cors'
import { Server } from 'http'
import express from 'express'
import 'express-async-errors'

const { NODE_ENV } = process.env

const app = express()

app.use(cors())
app.use(cookieParser())
app.use(express.json({ limit: '300mb' }))
app.use(express.urlencoded({ extended: true }))

app.use('/sessions', sessionsRoutes)
app.use('/message', messageRoutes)
app.use('/status', statusRoutes)
app.use(Files)

app.use((err, _req, res, _next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message
    })
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal Server Error'
  })
})

export const server = new Server(app)

export default app
