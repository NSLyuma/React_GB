import { CREATE_CHAT_LIST, DELETE_CHAT } from "./actions";

const initialState = {
  chatList: [],
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
    default:
      return state;
  }
};
