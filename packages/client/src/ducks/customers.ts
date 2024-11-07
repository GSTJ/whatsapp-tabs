import { createActions, createReducer } from 'reduxsauce'

type Customer = {
  _id: string
  messages: Map<string, any>
  firstLoad: boolean
}

type Message = {
  _id: string
  to: string
  from: string
}

type State = Map<string, Customer>

const INITIAL_STATE: State = new Map()

// Sort by date
const Sort = (current: any, next: any): number =>
  new Date(next.createdAt).getTime() - new Date(current.createdAt).getTime()

function MapOrderByDate(this: Map<string, any>): any[] {
  return [...this.values()].sort(Sort)
}

const addCustomers = (
  state: State = INITIAL_STATE,
  action: { customers: Customer[] }
): State => {
  const { customers } = action
  const Copy = new Map(state)
  customers.forEach(customer => {
    const messages = new Map()
    messages.order = MapOrderByDate
    Copy.set(customer._id, { ...customer, messages, firstLoad: true })
  })
  return Copy
}

const addCustomer = (
  state: State = INITIAL_STATE,
  action: { customer: Customer }
): State => {
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

const addCustomerMessages = (
  state: State = INITIAL_STATE,
  action: {
    message: {
      messages: Message[]
      cursor: string
      last: boolean
      clientID: string
    }
  }
): State => {
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

const addCustomerMessage = (
  state: State = INITIAL_STATE,
  action: { message: { customerMessage: Message } }
): State => {
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
