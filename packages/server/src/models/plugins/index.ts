import {
  pubSub,
  NEW_USER,
  NEW_CLIENT,
  NEW_USER_MESSAGE,
  NEW_CLIENT_MESSAGE
} from '../../graphql/resolvers/subscription'

export const pubUser = user => pubSub.publish(NEW_USER, { user })
export const pubClient = client => pubSub.publish(NEW_CLIENT, { client })

export const pubUserMessage = userMessage =>
  pubSub.publish(NEW_USER_MESSAGE, { userMessage: { userMessage } })
export const pubClientMessage = clientMessage =>
  pubSub.publish(NEW_CLIENT_MESSAGE, { clientMessage: { clientMessage } })

export default {
  userMessage: schema => {
    schema.post('save', pubUserMessage)
    schema.post('update', pubUserMessage)
  },
  clientMessage: schema => {
    schema.post('save', pubClientMessage)
    schema.post('update', pubClientMessage)
  },
  user: schema => {
    schema.post('save', pubUser)
    schema.post('update', pubUser)
  },
  client: schema => {
    schema.post('save', pubClient)
    schema.post('update', pubClient)
  }
}
