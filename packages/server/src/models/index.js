import Mongoose from 'mongoose'
import Plugins from './plugins'
import { userMessage, clientMessage, user, client, file } from './schemas'

client.plugin(Plugins.client)
clientMessage.plugin(Plugins.clientMessage)
user.plugin(Plugins.user)
userMessage.plugin(Plugins.userMessage)

export const User = Mongoose.model('users', user)
export const UserMessage = Mongoose.model('user_messages', userMessage)
export const Client = Mongoose.model('clients', client)
export const ClientMessage = Mongoose.model('client_messages', clientMessage)
export const File = Mongoose.model('files', file)
