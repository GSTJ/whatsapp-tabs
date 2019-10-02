import gql from "graphql-tag";

export default gql`
  type Client {
    _id: String
    number: String
    name: String
    lastMessage: clientMessage
    createdAt: ISODate
    updatedAt: ISODate
  }
  input clientInput {
    _id: String
    number: String
    name: String
    lastMessage: clientMessageInput
    createdAt: ISODate
    updatedAt: ISODate
  }
  input createClientInput {
    number: String!
    name: String
  }
`;
