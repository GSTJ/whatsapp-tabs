import gql from 'graphql-tag'
import Message from './message'
import UserMessage from './userMessage'
import CustomerMessage from './customerMessage'
import File from './file'
import Customer from './customer'
import User from './user'
import Profile from './profile'

export default gql`
  scalar Date
  scalar Time
  scalar DateTime
  scalar UtcOffset
  scalar EmailAddress
  scalar NegativeFloat
  scalar NegativeInt
  scalar NonNegativeFloat
  scalar NonNegativeInt
  scalar NonPositiveFloat
  scalar NonPositiveInt
  scalar PhoneNumber
  scalar PositiveFloat
  scalar PositiveInt
  scalar PostalCode
  scalar UnsignedFloat
  scalar UnsignedInt
  scalar URL
  scalar ObjectID
  scalar BigInt
  scalar Long
  scalar SafeInt
  scalar GUID
  scalar HexColorCode
  scalar HSL
  scalar HSLA
  scalar IPv4
  scalar IPv6
  scalar ISBN
  scalar MAC
  scalar Port
  scalar RGB
  scalar RGBA
  scalar USCurrency
  scalar Currency
  scalar JSON
  scalar JSONObject
  scalar Byte

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
