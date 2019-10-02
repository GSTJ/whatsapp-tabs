import gql from "graphql-tag";

export default gql`
  type clientMessages {
    messages: [clientMessage]
    cursor: String
    clientID: String
    last: Boolean
  }
  type newClientMessage {
    clientMessage: clientMessage
  }
  type clientMessage {
    _id: String
    from: String
    to: String
    body: String
    media: String
    status: String
    messageSid: String
    contentType: String
    createdAt: ISODate
    updatedAt: ISODate
  }
  input clientMessageInput {
    _id: String
    from: String
    to: String
    body: String
    media: String
    messageSid: String
    contentType: String
    createdAt: ISODate
    updatedAt: ISODate
  }
`;
