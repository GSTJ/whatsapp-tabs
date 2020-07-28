import gql from 'graphql-tag'
import Message from './message'
import UserMessage from './userMessage'
import ClientMessage from './clientMessage'
import File from './file'
import Client from './client'
import User from './user'
import Profile from './profile'

export default gql`
  scalar ISODate

  ${ClientMessage}
  ${UserMessage}
  ${Message}
  ${Profile}
  ${Client}
  ${File}
  ${User}

  type Query {
    me: Profile
    user(user: userInput): User
    users: [User]
    userMessage(message: userMessageInput): userMessage
    userMessages(userID: String, cursor: String, limit: Int): userMessages
    client(client: clientInput): Client
    clients: [Client]
    clientMessage(message: clientMessageInput): clientMessage
    clientMessages(clientID: String, cursor: String, limit: Int): clientMessages
  }

  type Mutation {
    sendUserMessage(message: sendMessageInput!): userMessage
    sendClientMessage(message: sendMessageInput!): clientMessage
    fowardClient(client: String!, to: String!): Client
    unmarkClient(client: String!): Client
    createClient(client: createClientInput!): Client
    uploadFile(file: uploadFileInput!): File
  }

  type Subscription {
    profile: User
    client: Client
    clientMessage: newClientMessage
    user: User
    userMessage: newUserMessage
  }
`
