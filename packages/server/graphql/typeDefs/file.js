import gql from "graphql-tag";

export default gql`
  type File {
    _id: String
    base64: String
    type: String
    name: String
    createdAt: ISODate
    updatedAt: ISODate
  }
  input uploadFileInput {
    base64: String
    type: String
    name: String
  }
`;
