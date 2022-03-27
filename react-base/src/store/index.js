import { combineReducers, createStore } from "redux";
import { profileReducer } from "./profile/reducer";
import { messagesReducer } from "./messages/reducer";
import { chatsReducer } from "./chats/reducer";

export const store = createStore(
  combineReducers({
    messages: messagesReducer,
    chats: chatsReducer,
    profile: profileReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);
