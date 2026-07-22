import gql from 'graphql-tag'

export default gql`
  type user {
    _id: String
    googleId: BigInt
    name: String
    email: String
    status: String
    lastMessage: userMessage
    conversations: [String]
    createdAt: Date
    updatedAt: Date
  }
  input userInput {
    _id: String
    googleId: BigInt
    name: String
    email: String
    status: String
    lastMessage: userMessageInput
    conversations: [String]
    createdAt: Date
    updatedAt: Date
  }
  input createUserInput {
    email: String!
    googleId: BigInt!
    name: String
  }
`
