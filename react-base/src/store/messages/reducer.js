import { CREATE_MESSAGE_LIST } from "./actions";

const initialState = {
  messageList: {},
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
    default:
      return state;
  }
};
