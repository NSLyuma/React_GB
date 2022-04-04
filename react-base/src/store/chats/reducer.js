import {
  CREATE_CHAT_LIST,
  DELETE_CHAT,
  SET_CHATS,
  SET_ERROR_CHAT,
  SET_LOADING_CHAT,
} from "./actions";

const initialState = {
  chatList: [],
  isLoading: false,
  error: null,
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CHAT_LIST: {
      return {
        ...state,
        chatList: [...state.chatList, action.payload],
      };
    }
    case DELETE_CHAT: {
      return {
        ...state,
        chatList: state.chatList.filter(({ id }) => id !== action.payload),
      };
    }
    case SET_LOADING_CHAT: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case SET_ERROR_CHAT: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case SET_CHATS: {
      return {
        ...state,
        chatList: action.payload,
      };
    }
    default:
      return state;
  }
};
