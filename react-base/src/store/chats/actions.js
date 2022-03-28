export const CREATE_CHAT_LIST = "CREATE_CHAT";

export const DELETE_CHAT = "DELETE_CHAT";

export const createChat = (chat) => ({
  type: CREATE_CHAT_LIST,
  payload: chat,
});

export const deleteChat = (chatId) => ({
  type: DELETE_CHAT,
  payload: chatId,
});

export const createChatThunk = (chat) => (dispatch) => {
  dispatch(createChat(chat));
};

export const deleteChatThunk = (chatId) => (dispatch) => {
  dispatch(deleteChat(chatId));
};
