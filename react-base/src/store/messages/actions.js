export const CREATE_MESSAGE_LIST = "CREATE_MESSAGE_LIST";

export const createMessage = (chatId, message) => ({
  type: CREATE_MESSAGE_LIST,
  payload: { chatId, message },
});
