import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { profileReducer } from "./profile/reducer";
import { messagesReducer } from "./messages/reducer";
import { chatsReducer } from "./chats/reducer";
import { gistsReducer } from "./gists/reducer";

const rootReducer = combineReducers({
  messages: messagesReducer,
  chats: chatsReducer,
  profile: profileReducer,
  gists: gistsReducer,
});

const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
