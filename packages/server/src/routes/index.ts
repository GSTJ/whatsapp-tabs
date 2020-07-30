import express from 'express'
import 'express-async-errors'
import sessionsRoutes from './sessions.routes'
import messagesRoutes from './messages.routes'
import statusRoutes from './status.routes'
// import Files from './files.routes'
import cookieParser from 'cookie-parser'
import ErrorMiddleware from '../errors/ErrorMiddleware'
import cors from 'cors'
import { Server } from 'http'
const app = express()

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/sessions', sessionsRoutes)
app.use('/messages', messagesRoutes)
app.use('/status', statusRoutes)
// app.use(Files)

app.use(ErrorMiddleware)

export const server = new Server(app)

export default app
