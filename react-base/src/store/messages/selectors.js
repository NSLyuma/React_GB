export const getMessagesFromState = (state) => state.messages;

export const getMessageList = (state) =>
  getMessagesFromState(state).messageList;

export const getIsLoadingMessageList = (state) =>
  getMessagesFromState(state).isLoading;

export const getErrorMessageList = (state) => getMessagesFromState(state).error;

export const getMessageListByChats = (chatId) => (state) =>
  getMessageList(state)[chatId];
