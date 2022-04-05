import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { profileReducer } from "./profile/reducer";
import { messagesReducer } from "./messages/reducer";
import { chatsReducer } from "./chats/reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  messages: messagesReducer,
  chats: chatsReducer,
  profile: profileReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
