import gql from 'graphql-tag'

export default gql`
  type user {
    _id: String
    picture: String
    name: String
    email: String
    status: String
    lastMessage: userMessage
    conversations: [String]
    createdAt: ISODate
    updatedAt: ISODate
  }
  input userInput {
    _id: String
    picture: String
    name: String
    email: String
    status: String
    lastMessage: userMessageInput
    conversations: [String]
    createdAt: ISODate
    updatedAt: ISODate
  }
  input createUserInput {
    email: String!
    picture: String
    name: String
  }
`
