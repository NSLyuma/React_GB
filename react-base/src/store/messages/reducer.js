import {
  CREATE_MESSAGE_LIST,
  SET_ERROR_MESSAGE_LIST,
  SET_LOADING_MESSAGE_LIST,
} from "./actions";

const initialState = {
  messageList: {},
  isLoading: false,
  error: undefined,
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MESSAGE_LIST: {
      const { chatId, message } = action.payload;
      return {
        ...state,
        messageList: {
          ...state.messageList,
          [chatId]: [...(state.messageList[chatId] || []), message],
        },
      };
    }
    case SET_LOADING_MESSAGE_LIST: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case SET_ERROR_MESSAGE_LIST: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
