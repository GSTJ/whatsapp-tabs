import gql from 'graphql-tag'

export default gql`
  type profile {
    _id: String
    picture: String
    name: String
    email: String
    status: String
    googleId: BigInt
    conversations: [String]
    createdAt: Date
    updatedAt: Date
  }
`
