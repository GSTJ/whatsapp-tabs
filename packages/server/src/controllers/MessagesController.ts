import { ClientMessage, Client } from '../models'
import { Request, Response } from 'express'

class MessageController {
  async create(req: Request, res: Response) {
    const { From, MessageSid, Body, MediaUrl0, MediaContentType0 } = req.body

    const number = From.replace('whatsapp:', '')

    const client =
      (await Client.findOne({ number })) || (await Client.create({ number }))

    const from = client._id

    ClientMessage.create({
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
