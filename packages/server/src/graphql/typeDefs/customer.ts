import gql from 'graphql-tag'

export default gql`
  type customer {
    _id: String
    number: String
    name: String
    lastMessage: customerMessage
    createdAt: ISODate
    updatedAt: ISODate
  }
  input clientInput {
    _id: String
    number: String
    name: String
    lastMessage: customerMessageInput
    createdAt: ISODate
    updatedAt: ISODate
  }
  input createClientInput {
    number: String!
    name: String
  }
`
