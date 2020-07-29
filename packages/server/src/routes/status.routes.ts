import express from 'express'
import TwillioGuard from '../utils/TwillioGuard'
import StatusController from '../controllers/StatusController'

const statusRouter = express.Router()

statusRouter.use(TwillioGuard)
statusRouter.post('/', StatusController.create)

export default statusRouter
