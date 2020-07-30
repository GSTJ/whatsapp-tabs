import {
  pubSub,
  NEW_USER,
  NEW_CUSTOMER,
  NEW_USER_MESSAGE,
  NEW_CUSTOMER_MESSAGE
} from '../../graphql/resolvers/subscription'

const pubUserMessage = userMessage =>
  pubSub.publish(NEW_USER_MESSAGE, { userMessage: { userMessage } })
export function userMessagePlugin(schema) {
  schema.post('save', pubUserMessage)
  schema.post('update', pubUserMessage)
}

const pubCustomerMessage = CustomerMessage =>
  pubSub.publish(NEW_CUSTOMER_MESSAGE, { CustomerMessage: { CustomerMessage } })
export function CustomerMessagePlugin(schema) {
  schema.post('save', pubCustomerMessage)
  schema.post('update', pubCustomerMessage)
}

const pubUser = user => pubSub.publish(NEW_USER, { user })
export function userPlugin(schema) {
  schema.post('save', pubUser)
  schema.post('update', pubUser)
}

const pubClient = customer => pubSub.publish(NEW_CUSTOMER, { customer })
export function clientPlugin(schema) {
  schema.post('save', pubClient)
  schema.post('update', pubClient)
}
