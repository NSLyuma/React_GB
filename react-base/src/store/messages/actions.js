import { nanoid } from "nanoid";

export const CREATE_MESSAGE_LIST = "CREATE_MESSAGE_LIST";

export const SET_LOADING_MESSAGE_LIST = "SET_LOADING_MESSAGE_LIST";

export const SET_ERROR_MESSAGE_LIST = "SET_ERROR_MESSAGE_LIST";

const createNewMessage = (author, text) => {
  return { id: nanoid(), author, text };
};

export const setLoadingMessageList = (isLoading) => ({
  type: SET_LOADING_MESSAGE_LIST,
  payload: isLoading,
});

export const setErrorMessageList = (error) => ({
  type: SET_ERROR_MESSAGE_LIST,
  payload: error,
});

export const createMessage = (chatId, message) => ({
  type: CREATE_MESSAGE_LIST,
  payload: { chatId, message },
});

export const createMessageThunk = (text, chatId) => (dispatch) => {
  const userMessage = createNewMessage("User", text);
  dispatch(createMessage(chatId, userMessage));

  const botMessage = createNewMessage("Bot", "Some text");
  setTimeout(() => {
    dispatch(createMessage(chatId, botMessage));
  }, 1000);
};
