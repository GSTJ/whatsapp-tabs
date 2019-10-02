import { loader } from "graphql.macro";

export const NEW_USER = loader("./subscriptions/user.gql");
export const NEW_CLIENT = loader("./subscriptions/client.gql");
export const NEW_CLIENT_MESSAGE = loader("./subscriptions/clientMessage.gql");
export const NEW_USER_MESSAGE = loader("./subscriptions/userMessage.gql");

export const GET_USERS = loader("./queries/users.gql");
export const GET_CLIENTS = loader("./queries/clients.gql");
export const GET_PROFILE = loader("./queries/profile.gql");
export const GET_CLIENT_MESSAGES = loader("./queries/clientMessages.gql");
export const GET_USER_MESSAGES = loader("./queries/userMessages.gql");

export const FOWARD_CLIENT = loader("./mutations/fowardClient.gql");
export const UNMARK_CLIENT = loader("./mutations/unmarkClient.gql");
export const SEND_CLIENT_MESSAGE = loader("./mutations/sendClientMessage.gql");
export const SEND_USER_MESSAGE = loader("./mutations/sendUserMessage.gql");
export const UPLOAD_FILE = loader("./mutations/uploadFile.gql");
