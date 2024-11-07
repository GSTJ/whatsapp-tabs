import gql from 'graphql-tag'

export default gql`
  type userMessages {
    messages: [userMessage]
    cursor: String
    userID: String
    last: Boolean
  }
  type newUserMessage {
    userMessage: userMessage
    target: String
  }
  type userMessage {
    _id: String
    from: String
    to: String
    body: String
    media: String
    status: String
    contentType: String
    createdAt: Date
    updatedAt: Date
  }
  input userMessageInput {
    _id: String
    from: String
    to: String
    body: String
    media: String
    contentType: String
    createdAt: Date
    updatedAt: Date
  }
`
