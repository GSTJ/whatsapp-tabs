import { ClientMessage } from '../models'
import { Request, Response } from 'express'

class StatusController {
  async create(req: Request, res: Response) {
    const { MessageStatus, MessageSid } = req.body

    const message = await ClientMessage.findOne({ messageSid: MessageSid })

    // Concurrency issue workaround
    switch (MessageStatus) {
      case 'read':
        message.status = MessageStatus
        break
      case 'delivered':
        if (message.status !== 'read') message.status = MessageStatus
        break
      case 'sent':
        if (message.status === 'sending') message.status = MessageStatus
        break
      default:
        break
    }

    await message.save()
    res.send('Status recieved.')
  }
}

export default new StatusController()
