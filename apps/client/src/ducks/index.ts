import { combineReducers, Reducer } from 'redux'
import {
  Reducers as internalReducers,
  Creators as internalCreators
} from './internal'
import {
  Reducers as clientReducers,
  Creators as clientCreators
} from './customers'
import { Reducers as userReducers, Creators as userCreators } from './users'

export type Actions = typeof internalCreators &
  typeof clientCreators &
  typeof userCreators

interface RootState {
  users: Reducer<any, any>
  internal: Reducer<any, any>
  customers: Reducer<any, any>
}

const rootReducer: Reducer<RootState> = combineReducers({
  users: userReducers,
  internal: internalReducers,
  customers: clientReducers
})

export default rootReducer
