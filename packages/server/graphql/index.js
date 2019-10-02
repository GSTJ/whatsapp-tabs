import dotenv from "dotenv";
import { GraphQLDateTime } from "graphql-iso-date";
import { ApolloServer } from "apollo-server-express";
import cookie from "cookie";
import typeDefs from "./typeDefs";
import { Query, Mutation, Subscription } from "./resolvers";
import { Validate } from "../authentication";

dotenv.config();
const { API_KEY } = process.env;

const Apollo = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Subscription
  },
  ISODate: GraphQLDateTime,
  name: "Whatsapp-Schema",
  version: "1.1",
  engine: {
    apiKey: API_KEY
  },
  context: async ({ req, connection }) => {
    if (connection) return connection.context;
    const { jwt } = req.cookies;
    return Validate(jwt);
  },
  subscriptions: {
    onConnect: async (params, socket) => {
      try {
        const { headers } = socket.upgradeReq;
        const { jwt } = cookie.parse(headers.cookie);
        const user = await Validate(jwt);
        user.status = "online";
        user.save();
        return user;
      } catch (error) {
        return false;
      }
    },
    onDisconnect: async (socket, context) => {
      try {
        const user = await context.initPromise;
        user.status = "offline";
        return user.save();
      } catch (error) {
        return false;
      }
    }
  }
});

export const Bind = async (app, server) => {
  Apollo.applyMiddleware({ app });
  Apollo.installSubscriptionHandlers(server);
};

export default Apollo;
