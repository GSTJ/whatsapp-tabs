import { PubSub, withFilter } from 'apollo-server'

export const pubSub = new PubSub()

export const NEW_USER_MESSAGE = 'NEW_USER_MESSAGE'
export const NEW_CUSTOMER_MESSAGE = 'NEW_CUSTOMER_MESSAGE'
export const NEW_CUSTOMER = 'NEW_CUSTOMER'
export const NEW_USER = 'NEW_USER'

export default {
  user: {
    subscribe: () => pubSub.asyncIterator([NEW_USER])
  },
  userMessage: {
    resolve: (payload, _args, { _id }) => {
      const { userMessage } = payload.userMessage
      const { to, from } = userMessage
      // Assignating relative target.
      return { userMessage, target: String(_id) === String(to) ? from : to }
    },
    subscribe: withFilter(
      () => pubSub.asyncIterator([NEW_USER_MESSAGE]),
      (payload, _args, { _id }) => {
        const { userMessage } = payload.userMessage
        const { to, from } = userMessage
        // Making sure messages are really private.
        return String(to) === String(_id) || String(from) === String(_id)
      }
    )
  },
  customer: {
    subscribe: () => pubSub.asyncIterator([NEW_CUSTOMER])
  },
  customerMessage: {
    subscribe: () => pubSub.asyncIterator([NEW_CUSTOMER_MESSAGE])
  }
}
