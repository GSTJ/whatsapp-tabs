import gql from 'graphql-tag'

export default gql`
  type customer {
    _id: String
    number: String
    name: String
    lastMessage: customerMessage
    createdAt: Date
    updatedAt: Date
  }
  input clientInput {
    _id: String
    number: String
    name: String
    lastMessage: customerMessageInput
    createdAt: Date
    updatedAt: Date
  }
  input createClientInput {
    number: String!
    name: String
  }
`
