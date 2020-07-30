import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import { ApolloClient, Store, Merge } from 'utils'
import Login from './Login'
import App from './App'

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
