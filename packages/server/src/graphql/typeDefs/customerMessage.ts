import gql from 'graphql-tag'

export default gql`
  type customerMessages {
    messages: [customerMessage]
    cursor: String
    clientID: String
    last: Boolean
  }
  type newCustomerMessage {
    customerMessage: customerMessage
  }
  type customerMessage {
    _id: String
    from: String
    to: String
    body: String
    media: String
    status: String
    messageSid: String
    contentType: String
    createdAt: Date
    updatedAt: Date
  }
  input customerMessageInput {
    _id: String
    from: String
    to: String
    body: String
    media: String
    messageSid: String
    contentType: String
    createdAt: Date
    updatedAt: Date
  }
`
