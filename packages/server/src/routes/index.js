import Authentication from './authentication'
import Twillio from './twillio'
import Files from './files'

import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { Server } from 'http'

const { NODE_ENV } = process.env

const app = express()

app.use(cors())
app.use(cookieParser())
app.use(express.json({ limit: '300mb' }))
app.use(express.urlencoded({ extended: true }))

app.use(Authentication)
app.use(Twillio)
app.use(Files)

export const server = Server(app)

export default app
