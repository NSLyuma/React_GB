import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { profileReducer } from "./profile/reducer";
import { messagesReducer } from "./messages/reducer";
import { chatsReducer } from "./chats/reducer";

const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export const store = createStore(
  combineReducers({
    messages: messagesReducer,
    chats: chatsReducer,
    profile: profileReducer,
  }),
  compose(applyMiddleware(thunk))
);
