import gql from "graphql-tag";

export default gql`
  type Profile {
    _id: String
    picture: String
    name: String
    email: String
    status: String
    conversations: [String]
    createdAt: ISODate
    updatedAt: ISODate
  }
`;
