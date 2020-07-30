import { createActions, createReducer } from 'reduxsauce'

const INITIAL_STATE = new Map()

// Sort by date
const Sort = (current, next) =>
  new Date(next.createdAt).getTime() - new Date(current.createdAt).getTime()
function MapOrderByDate() {
  return [...this.values()].sort(Sort)
}

const addCustomers = (state = INITIAL_STATE, action) => {
  const { customers } = action
  const Copy = new Map(state)
  customers.forEach(customer => {
    const messages = new Map()
    messages.order = MapOrderByDate
    Copy.set(customer._id, { ...customer, messages, firstLoad: true })
  })
  return Copy
}

const addCustomer = (state = INITIAL_STATE, action) => {
  const { customer } = action
  const Copy = new Map(state)

  const Customer = Copy.get(customer._id)
  if (!Customer) {
    const messages = new Map()
    messages.order = MapOrderByDate
    Copy.set(customer._id, { ...customer, messages, firstLoad: true })
  } else {
    Copy.set(customer._id, { ...Customer, ...customer })
  }
  return Copy
}

const addCustomerMessages = (state = INITIAL_STATE, action) => {
  const { messages, cursor, last, clientID } = action.message

  const Copy = new Map(state)
  const Customer = Copy.get(clientID)
  if (!Customer) return state

  Customer.cursor = cursor
  Customer.lastLoad = last
  Customer.firstLoad = false

  messages.forEach(message => Customer.messages.set(message._id, message))
  return Copy
}

const addCustomerMessage = (state = INITIAL_STATE, action) => {
  const { customerMessage } = action.message

  const Copy = new Map(state)
  const Customer = Copy.get(customerMessage.to || customerMessage.from)
  if (!Customer) return state

  Customer.messages.set(customerMessage._id, customerMessage)
  return Copy
}

export const { Types, Creators } = createActions({
  addCustomer: ['customer'],
  addCustomers: ['customers'],
  addCustomerMessages: ['message'],
  addCustomerMessage: ['message']
})

export const Reducers = createReducer(INITIAL_STATE, {
  [Types.ADD_CUSTOMER_MESSAGES]: addCustomerMessages,
  [Types.ADD_CUSTOMER_MESSAGE]: addCustomerMessage,
  [Types.ADD_CUSTOMERS]: addCustomers,
  [Types.ADD_CUSTOMER]: addCustomer
})
