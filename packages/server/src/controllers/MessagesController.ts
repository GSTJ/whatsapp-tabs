import { CustomerMessage, Customer } from '../models'
import { Request, Response } from 'express'

class MessageController {
  async create(req: Request, res: Response) {
    const { From, MessageSid, Body, MediaUrl0, MediaContentType0 } = req.body

    const number = From.replace('whatsapp:', '')

    const customer =
      (await Customer.findOne({ number })) ||
      (await Customer.create({ number }))

    const from = customer._id

    CustomerMessage.create({
      messageSid: MessageSid,
      from,
      media: MediaUrl0,
      contentType: MediaContentType0,
      body: Body
    })

    res.send('Message recieved.')
  }
}

export default new MessageController()
