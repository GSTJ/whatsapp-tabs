import Reducers, { Actions } from 'ducks'
import { createStore } from 'redux'
import * as requests from 'graphql/requests'
import Client from '../graphql'

const ReduxExtension = window.__REDUX_DEVTOOLS_EXTENSION__
export const ApolloClient = Client
export const Store = createStore(Reducers, ReduxExtension && ReduxExtension())

const pickSet = (Pick, Creator) => ({ data }) =>
  Store.dispatch(Creator(data[Pick]))
const Get = query => ApolloClient.query({ query })
const Sub = query => ApolloClient.subscribe({ query })

export async function Merge() {
  Get(requests.GET_CLIENTS).then(pickSet('clients', Actions.addClients))
  Get(requests.GET_USERS).then(pickSet('users', Actions.addUsers))
  Get(requests.GET_PROFILE).then(pickSet('me', Actions.setProfile))
  Get(requests.GET_CLIENT_MESSAGES).then(console.log)
  Get(requests.GET_USER_MESSAGES).then(console.log)
  Sub(requests.NEW_CLIENT).subscribe(pickSet('client', Actions.addClient))
  Sub(requests.NEW_USER_MESSAGE).subscribe(
    pickSet('userMessage', Actions.addUserMessage)
  )
  Sub(requests.NEW_CLIENT_MESSAGE).subscribe(
    pickSet('clientMessage', Actions.addClientMessage)
  )
  Sub(requests.NEW_USER).subscribe(pickSet('user', Actions.addUser))
}
