import { createActions, createReducer } from "reduxsauce";

const INITIAL_STATE = new Map()

// Sort by date
const Sort = (current, next) =>
    new Date(next.createdAt).getTime() - new Date(current.createdAt).getTime();
function MapOrderByDate() {
    return [...this.values()].sort(Sort);
}

const addUsers = (state = INITIAL_STATE, action) => {
    const { users } = action;
    const Copy = new Map(state);
    users.forEach(user => {
        const messages = new Map();
        messages.order = MapOrderByDate;
        Copy.set(user._id, { ...user, messages, firstLoad: true });
    });
    return Copy;
};

const addUser = (state = INITIAL_STATE, action) => {
    const { user } = action;
    const Copy = new Map(state);

    const User = Copy.get(user._id);
    if (!User) {
        const messages = new Map();
        messages.order = MapOrderByDate;
        Copy.set(user._id, { ...user, messages, firstLoad: true });
    } else {
        Copy.set(user._id, { ...User, ...user })
    }
    return Copy;
};

const addUserMessages = (state = INITIAL_STATE, action) => {
    const { messages, cursor, last, userID } = action.message;

    const Copy = new Map(state);
    const User = Copy.get(userID);
    if (!User) return state;

    User.cursor = cursor;
    User.lastLoad = last;
    User.firstLoad = false

    messages.forEach(message => User.messages.set(message._id, message));
    return Copy;
};

const addUserMessage = (state = INITIAL_STATE, action) => {
    const { userMessage, target } = action.message;

    const Copy = new Map(state);
    const User = Copy.get(target);
    if (!User) return state;

    User.messages.set(userMessage._id, userMessage);
    return Copy;
};

export const { Types, Creators } = createActions({
    addUser: ["user"],
    addUsers: ["users"],
    addUserMessages: ["message"],
    addUserMessage: ["message"]
});

export const Reducers = createReducer(INITIAL_STATE, {
    [Types.ADD_USER_MESSAGES]: addUserMessages,
    [Types.ADD_USER_MESSAGE]: addUserMessage,
    [Types.ADD_USERS]: addUsers,
    [Types.ADD_USER]: addUser
});
