import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { WebSocketLink } from 'apollo-link-ws'
import { split } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities'
import { setContext } from '@apollo/client/link/context'

const { NODE_ENV } = process.env

const production = true //NODE_ENV === 'production'

const wsUri = production
  ? 'ws://whatsapp-tabs.herokuapp.com'
  : 'ws://localhost:8087'

const httpUri = production
  ? 'https://whatsapp-tabs.herokuapp.com'
  : 'http://localhost:8087'

const httpLink = new HttpLink({ uri: `${httpUri}/graphql` })

const wsLink = new WebSocketLink({
  uri: `${wsUri}/graphql`,
  options: {
    reconnect: true,
    connectionParams: {
      authToken: localStorage.getItem('token')
    }
  }
})

function separator({ query }) {
  const definition = getMainDefinition(query)
  return (
    definition.kind === 'OperationDefinition' &&
    definition.operation === 'subscription'
  )
}

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token')
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const link = authLink.concat(split(separator, wsLink, httpLink))

const cache = new InMemoryCache()
const client = new ApolloClient({ cache, link })

export default client
