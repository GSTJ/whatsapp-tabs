import gql from 'graphql-tag'
import Message from './message'
import UserMessage from './userMessage'
import CustomerMessage from './customerMessage'
import File from './file'
import Customer from './customer'
import User from './user'
import Profile from './profile'

export default gql`
  scalar ISODate

  ${CustomerMessage}
  ${UserMessage}
  ${Message}
  ${Profile}
  ${Customer}
  ${File}
  ${User}

  type Query {
    me: profile
    user(user: userInput): user
    users: [user]
    userMessage(message: userMessageInput): userMessage
    userMessages(userID: String, cursor: String, limit: Int): userMessages
    customer(customer: clientInput): customer
    customers: [customer]
    customerMessage(message: customerMessageInput): customerMessage
    customerMessages(
      clientID: String
      cursor: String
      limit: Int
    ): customerMessages
  }

  type Mutation {
    sendUserMessage(message: sendMessageInput!): userMessage
    sendCustomerMessage(message: sendMessageInput!): customerMessage
    fowardCustomer(customer: String!, to: String!): customer
    unmarkCustomer(customer: String!): customer
    createCustomer(customer: createClientInput!): customer
    uploadFile(file: uploadFileInput!): file
  }

  type Subscription {
    profile: user
    customer: customer
    customerMessage: newCustomerMessage
    user: user
    userMessage: newUserMessage
  }
`
