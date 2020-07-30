import express from 'express'
import twilioGuard from '../utils/twilioGuard'
import StatusController from '../controllers/StatusController'

const statusRouter = express.Router()

statusRouter.use(twilioGuard)
statusRouter.post('/', StatusController.create)

export default statusRouter
