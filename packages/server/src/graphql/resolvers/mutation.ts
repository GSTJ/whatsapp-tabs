import twillio from 'twilio'
import { Client, File, User, UserMessage, ClientMessage } from '../../models'

const { ACCOUNT_SID, AUTH_TOKEN, TWILLIO_NUMBER } = process.env
const twillioClient = twillio(ACCOUNT_SID, AUTH_TOKEN)

import AppError from '../../errors/AppError'

export default {
  async sendClientMessage(_root, { message }, my) {
    const client = await Client.findById(message.to)
    if (!client) throw new AppError('Target not found.')

    const { media, contentType, ...rest } = message

    // Adciona o cliente à lista "privada"
    const me = await User.findById(my._id)
    const exists = me.conversations.indexOf(client._id)
    if (exists === -1) {
      me.conversations.push(client._id)
      me.save()
    }
    // Envia a mensagem para o Twillio
    const { sid: messageSid } = await twillioClient.messages.create({
      ...rest,
      mediaUrl: media,
      to: `whatsapp:${client.number}`,
      from: TWILLIO_NUMBER
    })

    if (!messageSid) throw new AppError('Something went wrong with Twillio.')
    // Salva o objeto na DB
    return ClientMessage.create({
      ...rest,
      from: my._id,
      messageSid,
      contentType,
      media
    })
  },
  async sendUserMessage(_root, { message }, my) {
    const user = await User.findById(message.to)
    if (!user) throw new AppError('Target not found.')

    const { media, contentType, ...rest } = message
    return UserMessage.create({
      ...rest,
      from: my._id,
      contentType,
      media
    })
  },
  async uploadFile(_root, args) {
    return File.create(args.file)
  },
  async createClient(_root, args) {
    return Client.create(args)
  },
  async unmarkClient(_root, { client }, my) {
    const me = await User.findById(my._id)

    const index = me.conversations.indexOf(client._id)
    if (index !== -1) throw new AppError('Client not assigned.')

    me.conversations.splice(index, 1)
    await me.save()
  },
  async fowardClient(_root, { client, to }) {
    const target = await User.findById(to)
    if (target.status !== 'online') throw new AppError('User unavailable.')

    const index = target.conversations.indexOf(client._id)
    if (index !== -1) return

    target.conversations.push(client._id)
    await target.save()
  }
}
