import { User, Client, ClientMessage, UserMessage } from '../../models'
import AppError from '../../errors/AppError'

export default {
  me(_root, _args, me) {
    return me
  },
  async client(_root, args) {
    const client = await Client.findOne(args.client).exec()
    if (!client) throw new AppError('Client does not exist.')
    return client
  },
  async clients(_root, args) {
    const clients = await Client.find(args)
      .lean()
      .exec()

    // Adding lastMessage to each client.
    const modified = clients.map(async client => {
      client.lastMessage = await ClientMessage.findOne({
        $or: [{ from: client._id }, { to: client._id }]
      })
        .sort('-createdAt')
        .exec()

      return client
    })

    return Promise.all(modified)
  },
  async clientMessage(_root, args) {
    const message = await ClientMessage.findById(args.message._id).exec()
    if (!message) throw new AppError('Message does not exist.')
    return message
  },
  async clientMessages(_root, { cursor, clientID, limit = 30 }) {
    // Surpassing the limit to foresee the end.
    const messages = await ClientMessage.find({
      ...(clientID && { $or: [{ from: clientID }, { to: clientID }] }),
      ...(cursor && { createdAt: { $lt: cursor } })
    })
      .sort('-createdAt')
      .limit(limit + 1)
      .lean()
      .exec()

    const last = !messages[limit]
    const lastMessage = messages[messages.length - 1]
    const newCursor = lastMessage && lastMessage.createdAt

    if (!last) {
      messages.pop()
    }

    return { clientID, last, messages, cursor: newCursor }
  },
  async user(_root, args) {
    const user = await User.findOne(args.user).exec()
    if (!user) throw new AppError('User does not exist.')
    return user
  },
  async users(_root, args, my) {
    const users = await User.find(args)
      .lean()
      .exec()

    // Adding lastMessage to each user.
    const modified = users.map(async user => {
      user.lastMessage = await UserMessage.findOne({
        $or: [
          { $and: [{ from: user._id }, { to: my._id }] },
          { $and: [{ from: my._id }, { to: user._id }] }
        ]
      })
        .sort('-createdAt')
        .exec()
      return user
    })

    return Promise.all(modified)
  },

  async userMessage(_root, args) {
    const message = await UserMessage.findById(args.message._id).exec()
    if (!message) throw new AppError('Message does not exist.')
    return message
  },
  async userMessages(_root, { cursor, userID, limit = 30 }) {
    // Surpassing the limit to foresee the end.
    const messages = await UserMessage.find({
      ...(userID && { $or: [{ from: userID }, { to: userID }] }),
      ...(cursor && { createdAt: { $lt: cursor } })
    })
      .sort('-createdAt')
      .limit(limit + 1)
      .lean()
      .exec()

    const last = !messages[limit]
    const lastMessage = messages[messages.length - 1]
    const newCursor = lastMessage && lastMessage.createdAt

    if (!last) {
      messages.pop()
    }

    return { userID, last, messages, cursor: newCursor }
  }
}
