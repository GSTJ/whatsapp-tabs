import express from 'express'
import TwillioGuard from '../utils/TwillioGuard'
import MessagesController from '../controllers/MessagesController'

const messagesRouter = express.Router()

messagesRouter.use(TwillioGuard)
messagesRouter.post('/', MessagesController.create)

export default messagesRouter
