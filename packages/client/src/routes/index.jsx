import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import { ApolloClient, Store, Merge } from 'utils'
import Login from './login'
import App from './app'

function Routes() {
  const token = localStorage.getItem('token')

  return (
    <SnackbarProvider maxSnack={3}>
      <Provider store={Store}>
        <ApolloProvider client={ApolloClient}>
          <BrowserRouter>
            <Switch>
              {token && (Merge(), (<App />))}
              <Route path="/" component={Login} />
            </Switch>
          </BrowserRouter>
        </ApolloProvider>
      </Provider>
    </SnackbarProvider>
  )
}
export default Routes
