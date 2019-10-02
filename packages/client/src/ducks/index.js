import { combineReducers } from "redux";
import {
  Reducers as internalReducers,
  Creators as internalCreators
} from "./internal";
import {
  Reducers as clientReducers,
  Creators as clientCreators
} from "./clients";
import { Reducers as userReducers, Creators as userCreators } from "./users";

export const Actions = {
  ...internalCreators,
  ...clientCreators,
  ...userCreators
};

export default combineReducers({
  users: userReducers,
  internal: internalReducers,
  clients: clientReducers
});
