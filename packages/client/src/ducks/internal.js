import { createActions, createReducer } from "reduxsauce";

const INITIAL_STATE = {
  profile: {},
  foward: false,
  selected: null,
  toggle: false,
  lock: false,
  search: "",
  send: ""
};

const setProperty = (state, action) => ({
  ...state,
  ...action
});

export const { Types, Creators } = createActions({
  setProfile: ["profile"],
  setSelected: ["selected"],
  setToggle: ["toggle"],
  setFoward: ["foward"],
  setSearch: ["search"],
  setSend: ["send"],
  setLock: ["lock"]
});

export const Reducers = createReducer(INITIAL_STATE, {
  [Types.SET_PROFILE]: setProperty,
  [Types.SET_SELECTED]: setProperty,
  [Types.SET_TOGGLE]: setProperty,
  [Types.SET_FOWARD]: setProperty,
  [Types.SET_SEARCH]: setProperty,
  [Types.SET_SEND]: setProperty,
  [Types.SET_LOCK]: setProperty
});
