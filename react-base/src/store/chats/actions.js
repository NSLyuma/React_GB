import { chatsApi } from "../../api/endpoints/chats";

export const CREATE_CHAT_LIST = "CREATE_CHAT";

export const DELETE_CHAT = "DELETE_CHAT";

export const SET_LOADING_CHAT = "SET_LOADING_CHAT";

export const SET_ERROR_CHAT = "SET_ERROR_CHAT";

export const SET_CHATS = "SET_CHATS";

export const createChat = (chat) => ({
  type: CREATE_CHAT_LIST,
  payload: chat,
});

export const deleteChat = (chatId) => ({
  type: DELETE_CHAT,
  payload: chatId,
});

export const setLoadingChat = (isLoading) => ({
  type: SET_LOADING_CHAT,
  payload: isLoading,
});

export const setErrorChat = (error) => ({
  type: SET_ERROR_CHAT,
  payload: error,
});

export const setChats = (chats) => ({
  type: SET_CHATS,
  payload: chats,
});

export const getChatsThunk = () => async (dispatch) => {
  dispatch(setLoadingChat(true));

  try {
    const data = await chatsApi.get();
    dispatch(setChats(data));
  } catch (error) {
    dispatch(setErrorChat(error));
  }

  dispatch(setLoadingChat(false));
};

export const createChatThunk = (chat) => (dispatch) => {
  dispatch(createChat(chat));
};

export const deleteChatThunk = (chatId) => (dispatch) => {
  dispatch(deleteChat(chatId));
};
