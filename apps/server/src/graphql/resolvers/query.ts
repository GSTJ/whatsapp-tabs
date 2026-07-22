import { User, Customer, CustomerMessage, UserMessage } from '../../models'
import AppError from '../../errors/AppError'

export default {
  me(_root, _args, me) {
    return me
  },
  async customer(_root, args) {
    const customer = await Customer.findOne(args.customer).exec()
    if (!customer) throw new AppError('Customer does not exist.')
    return customer
  },
  async customers(_root, args) {
    const customers = await Customer.find(args)
      .lean()
      .exec()

    // Adding lastMessage to each customer.
    const modified = customers.map(async customer => {
      customer.lastMessage = await CustomerMessage.findOne({
        $or: [{ from: customer._id }, { to: customer._id }]
      })
        .sort('-createdAt')
        .exec()

      return customer
    })

    return Promise.all(modified)
  },
  async customerMessage(_root, args) {
    const message = await CustomerMessage.findById(args.message._id).exec()
    if (!message) throw new AppError('Message does not exist.')
    return message
  },
  async customerMessages(_root, { cursor, clientID, limit = 30 }) {
    // Surpassing the limit to foresee the end.
    const messages = await CustomerMessage.find({
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
