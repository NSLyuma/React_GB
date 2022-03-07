import { CREATE_MESSAGE_LIST } from "./actions";

const initialState = {
  messageList: [],
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MESSAGE_LIST: {
      return {
        ...state,
        messageList: [...state.messageList, action.payload],
      };
    }
    default:
      return state;
  }
};
