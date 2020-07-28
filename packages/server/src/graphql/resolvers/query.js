import { User, Client, ClientMessage, UserMessage } from '../../models'

async function getClientMessages({ cursor, clientID, limit = 30 }) {
  const options = {}
  if (clientID) options.$or = [{ from: clientID }, { to: clientID }]
  if (cursor) options.createdAt = { $lt: cursor }

  // Surpassing the limit to foresee the end.
  const messages = await ClientMessage.find(options)
    .sort('-createdAt')
    .limit(limit + 1)
    .lean()
    .exec()

  const last = !messages[limit]
  const lastMessage = messages[messages.length - 1]
  const newCursor = lastMessage && lastMessage.createdAt

  if (!last) messages.pop()

  return { clientID, last, messages, cursor: newCursor }
}

async function getUserMessages({ cursor, userID, limit = 30 }) {
  const options = {}
  if (userID) options.$or = [{ from: userID }, { to: userID }]
  if (cursor) options.createdAt = { $lt: cursor }

  // Surpassing the limit to foresee the end.
  const messages = await UserMessage.find(options)
    .sort('-createdAt')
    .limit(limit + 1)
    .lean()
    .exec()

  const last = !messages[limit]
  const lastMessage = messages[messages.length - 1]
  const newCursor = lastMessage && lastMessage.createdAt

  if (!last) messages.pop()

  return { userID, last, messages, cursor: newCursor }
}

async function getClients(args) {
  const clients = await Client.find(args)
    .lean()
    .exec()
  // Adding lastMessage to each client.
  const modified = clients.map(client =>
    ClientMessage.findOne({ $or: [{ from: client._id }, { to: client._id }] })
      .sort('-createdAt')
      .exec()
      .then(lastMessage => ({ ...client, lastMessage }))
  )

  return Promise.all(modified)
}

async function getUsers(args, my) {
  const users = await User.find(args)
    .lean()
    .exec()
  // Adding lastMessage to each user.
  const modified = users.map(user =>
    UserMessage.findOne({
      $or: [
        { $and: [{ from: user._id }, { to: my._id }] },
        { $and: [{ from: my._id }, { to: user._id }] }
      ]
    })
      .sort('-createdAt')
      .exec()
      .then(lastMessage => ({ ...user, lastMessage }))
  )

  return Promise.all(modified)
}

export default {
  me: (root, args, me) => me,
  client: async (root, args) => {
    const client = await Client.findOne(args.client).exec()
    if (!client) throw new Error('Client does not exist.')
    return client
  },
  clients: (root, args) => getClients(args),
  clientMessage: async (root, args) => {
    const message = await ClientMessage.findById(args.message._id).exec()
    if (!message) throw new Error('Message does not exist.')
    return message
  },
  clientMessages: async (root, args) => getClientMessages(args),
  user: async (root, args) => {
    const user = await User.findOne(args.user).exec()
    if (!user) throw new Error('User does not exist.')
    return user
  },
  users: (root, args, my) => getUsers(args, my),
  userMessage: async (root, args) => {
    const message = await UserMessage.findById(args.message._id).exec()
    if (!message) throw new Error('Message does not exist.')
    return message
  },
  userMessages: async (root, args) => getUserMessages(args)
}
