export const getMessagesFromState = (state) => state.messages;

export const getMessageList = (state) =>
  getMessagesFromState(state).messageList;

export const getMessageListByChats = (chatId) => (state) =>
  getMessageList(state)[chatId];
