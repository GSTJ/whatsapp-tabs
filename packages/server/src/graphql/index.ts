import { ApolloServer } from 'apollo-server-express'
import typeDefs from './typeDefs'
import { Query, Mutation, Subscription } from './resolvers'
import ValidateJWT from '../utils/ValidateJWT'
import { resolvers } from 'graphql-scalars'

const { API_KEY } = process.env

const Apollo = new ApolloServer({
  ...resolvers,
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Subscription
  },
  engine: {
    apiKey: API_KEY
  },
  context: async ({ req, connection }) => {
    if (connection) return connection.context
    const token = (req.headers.authorization || '').replace('Bearer ', '')

    return ValidateJWT(token)
  },
  subscriptions: {
    onConnect: async (params: { authToken: string }, socket) => {
      try {
        const user = await ValidateJWT(params.authToken)
        user.status = 'online'
        user.save()
        return user
      } catch (error) {
        return false
      }
    },
    onDisconnect: async (socket, context) => {
      try {
        const user = await context.initPromise
        user.status = 'offline'
        return user.save()
      } catch (error) {
        return false
      }
    }
  }
})

export default Apollo
