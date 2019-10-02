import {
  pubSub,
  NEW_USER,
  NEW_CLIENT,
  NEW_USER_MESSAGE,
  NEW_CLIENT_MESSAGE
} from "../../graphql/resolvers/subscription";

export const pubUser = user => pubSub.publish(NEW_USER, { user });
export const pubClient = client => pubSub.publish(NEW_CLIENT, { client });
export const pubUserMessage = userMessage =>
  pubSub.publish(NEW_USER_MESSAGE, { userMessage: { userMessage } });
export const pubClientMessage = clientMessage =>
  pubSub.publish(NEW_CLIENT_MESSAGE, { clientMessage: { clientMessage } });

export const userMessage = schema => {
  schema.post("save", pubUserMessage);
  schema.post("update", pubUserMessage);
};
export const clientMessage = schema => {
  schema.post("save", pubClientMessage);
  schema.post("update", pubClientMessage);
};
export const user = schema => {
  schema.post("save", pubUser);
  schema.post("update", pubUser);
};
export const client = schema => {
  schema.post("save", pubClient);
  schema.post("update", pubClient);
};
