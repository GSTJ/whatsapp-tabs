import { ApolloServer } from 'apollo-server-express'
import typeDefs from './typeDefs'
import { Query, Mutation, Subscription } from './resolvers'
import validateJWT from '../utils/validateJWT'
import { resolvers } from 'graphql-scalars'
import { AuthenticationError } from 'apollo-server'

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
    apiKey: API_KEY,
    rewriteError(err) {
      // Return `null` to avoid reporting `AuthenticationError`s
      if (err instanceof AuthenticationError) {
        return null
      }
      // All other errors will be reported.
      return err
    }
  },
  context: async ({ req, connection }) => {
    if (connection) return connection.context
    const token = (req.headers.authorization || '').replace('Bearer ', '')

    return validateJWT(token)
  },
  subscriptions: {
    onConnect: async (params: { authToken: string }) => {
      const user = await validateJWT(params.authToken)
      user.status = 'online'
      user.save()
      return user
    },
    onDisconnect: async (socket, context) => {
      const user = await context.initPromise
      user.status = 'offline'
      return user.save()
    }
  }
})

export default Apollo
