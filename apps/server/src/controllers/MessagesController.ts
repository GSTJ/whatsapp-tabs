import { CustomerMessage, Customer } from '../models'
import { Request, Response } from 'express'

class MessageController {
  async create(req: Request, res: Response) {
    const { From, MessageSid, Body, MediaUrl0, MediaContentType0 } = req.body

    const number = From.replace('whatsapp:', '')

    const customer =
      (await Customer.findOne({ number })) ||
      (await Customer.create({ number }))

    CustomerMessage.create({
      messageSid: MessageSid,
      from: customer._id,
      media: MediaUrl0,
      contentType: MediaContentType0,
      body: Body
    })

    res.send('Message recieved.')
  }
}

export default new MessageController()
