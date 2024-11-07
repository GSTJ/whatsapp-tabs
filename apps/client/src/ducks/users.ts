import { createActions, createReducer } from 'reduxsauce'

type User = {
  _id: string
  messages: Map<string, any>
  firstLoad: boolean
}

type State = Map<string, User>

const INITIAL_STATE: State = new Map()

// Sort by date
const Sort = (current: any, next: any): number =>
  new Date(next.createdAt).getTime() - new Date(current.createdAt).getTime()

function MapOrderByDate(this: Map<string, User>): User[] {
  return [...this.values()].sort(Sort)
}

const addUsers = (state: State = INITIAL_STATE, action: any): State => {
  const { users } = action
  const Copy = new Map(state)
  users.forEach((user: User) => {
    const messages = new Map()
    messages.order = MapOrderByDate
    Copy.set(user._id, { ...user, messages, firstLoad: true })
  })
  return Copy
}

const addUser = (state: State = INITIAL_STATE, action: any): State => {
  const { user } = action
  const Copy = new Map(state)

  const User = Copy.get(user._id)
  if (!User) {
    const messages = new Map()
    messages.order = MapOrderByDate
    Copy.set(user._id, { ...user, messages, firstLoad: true })
  } else {
    Copy.set(user._id, { ...User, ...user })
  }
  return Copy
}

const addUserMessages = (state: State = INITIAL_STATE, action: any): State => {
  const { messages, cursor, last, userID } = action.message

  const Copy = new Map(state)
  const User = Copy.get(userID)
  if (!User) return state

  User.cursor = cursor
  User.lastLoad = last
  User.firstLoad = false

  messages.forEach((message: any) => User.messages.set(message._id, message))
  return Copy
}

const addUserMessage = (state: State = INITIAL_STATE, action: any): State => {
  const { userMessage, target } = action.message

  const Copy = new Map(state)
  const User = Copy.get(target)
  if (!User) return state

  User.messages.set(userMessage._id, userMessage)
  return Copy
}

export const { Types, Creators } = createActions({
  addUser: ['user'],
  addUsers: ['users'],
  addUserMessages: ['message'],
  addUserMessage: ['message']
})

export const Reducers = createReducer(INITIAL_STATE, {
  [Types.ADD_USER_MESSAGES]: addUserMessages,
  [Types.ADD_USER_MESSAGE]: addUserMessage,
  [Types.ADD_USERS]: addUsers,
  [Types.ADD_USER]: addUser
})
