import gql from 'graphql-tag'

export default gql`
  type file {
    _id: String
    base64: String
    type: String
    name: String
    createdAt: Date
    updatedAt: Date
  }
  input uploadFileInput {
    base64: String
    type: String
    name: String
  }
`
