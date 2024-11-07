
import { ApolloClient, HttpLink, InMemoryCache, split, WebSocketLink } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { setContext } from '@apollo/client/link/context'

const { NODE_ENV } = process.env

const production: boolean = true //NODE_ENV === 'production'

const wsUri: string = production
  ? 'ws://whatsapp-tabs.herokuapp.com'
  : 'ws://localhost:8087'

const httpUri: string = production
  ? 'https://whatsapp-tabs.herokuapp.com'
  : 'http://localhost:8087'

const httpLink: HttpLink = new HttpLink({ uri: `${httpUri}/graphql` })

const wsLink: WebSocketLink = new WebSocketLink({
  uri: `${wsUri}/graphql`,
  options: {
    reconnect: true,
    connectionParams: {
      authToken: localStorage.getItem('token')
    }
  }
})

function separator({ query }: { query: any }): boolean {
  const definition = getMainDefinition(query)
  return (
    definition.kind === 'OperationDefinition' &&
    definition.operation === 'subscription'
  )
}

const authLink = setContext((_, { headers }: { headers: any }) => {
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

const cache: InMemoryCache = new InMemoryCache()
const client: ApolloClient<InMemoryCache> = new ApolloClient({ cache, link })

export type { ApolloClient, HttpLink, InMemoryCache, WebSocketLink }
export { client }
