import { wait } from "../../api";

export const CREATE_MESSAGE_LIST = "CREATE_MESSAGE_LIST";

export const SET_LOADING_MESSAGE_LIST = "SET_LOADING_MESSAGE_LIST";

export const SET_ERROR_MESSAGE_LIST = "SET_ERROR_MESSAGE_LIST";

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

export const createMessageThunk = (chatId, message) => (dispatch) => {
  dispatch(createMessage(chatId, message));
};

export const createBotMessageThunk = (chatId, message) => async (dispatch) => {
  dispatch(setLoadingMessageList(true));

  try {
    await wait(1000);
    dispatch(createMessage(chatId, message));
  } catch (error) {
    dispatch(setErrorMessageList(error));
  }

  dispatch(setLoadingMessageList(false));
};
