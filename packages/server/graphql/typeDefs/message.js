import gql from "graphql-tag";

export default gql`
  input sendMessageInput {
    from: String
    to: String!
    body: String
    media: String
    contentType: String
  }
`;
