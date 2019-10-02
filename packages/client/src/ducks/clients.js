import { createActions, createReducer } from "reduxsauce";

const INITIAL_STATE = new Map()

// Sort by date
const Sort = (current, next) =>
  new Date(next.createdAt).getTime() - new Date(current.createdAt).getTime();
function MapOrderByDate() {
  return [...this.values()].sort(Sort);
}

const addClients = (state = INITIAL_STATE, action) => {
  const { clients } = action;
  const Copy = new Map(state);
  clients.forEach(client => {
    const messages = new Map();
    messages.order = MapOrderByDate;
    Copy.set(client._id, { ...client, messages, firstLoad: true });
  });
  return Copy;
};

const addClient = (state = INITIAL_STATE, action) => {
  const { client } = action;
  const Copy = new Map(state);

  const Client = Copy.get(client._id);
  if (!Client) {
    const messages = new Map();
    messages.order = MapOrderByDate;
    Copy.set(client._id, { ...client, messages, firstLoad: true });
  } else {
    Copy.set(client._id, { ...Client, ...client })
  }
  return Copy;
};

const addClientMessages = (state = INITIAL_STATE, action) => {
  const { messages, cursor, last, clientID } = action.message;

  const Copy = new Map(state);
  const Client = Copy.get(clientID);
  if (!Client) return state;

  Client.cursor = cursor;
  Client.lastLoad = last;
  Client.firstLoad = false

  messages.forEach(message => Client.messages.set(message._id, message));
  return Copy;
};

const addClientMessage = (state = INITIAL_STATE, action) => {
  const { clientMessage } = action.message;

  const Copy = new Map(state);
  const Client = Copy.get(clientMessage.to || clientMessage.from);
  if (!Client) return state;

  Client.messages.set(clientMessage._id, clientMessage);
  return Copy;
};

export const { Types, Creators } = createActions({
  addClient: ["client"],
  addClients: ["clients"],
  addClientMessages: ["message"],
  addClientMessage: ["message"]
});

export const Reducers = createReducer(INITIAL_STATE, {
  [Types.ADD_CLIENT_MESSAGES]: addClientMessages,
  [Types.ADD_CLIENT_MESSAGE]: addClientMessage,
  [Types.ADD_CLIENTS]: addClients,
  [Types.ADD_CLIENT]: addClient
});
