export const getChatsFromState = (state) => state.chats;

export const getChatList = (state) => getChatsFromState(state).chatList;

export const getChatIsLoading = (state) => getChatsFromState(state).isLoading;

export const getChatError = (state) => getChatsFromState(state).error;
