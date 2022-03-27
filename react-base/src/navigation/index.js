export const getHomeLink = () => "/";

export const getProfileLink = () => ["", "profile"].join("/");

export const getChatsLink = () => ["", "chats"].join("/");

export const getMessagesLink = (chatId = ":chatId") =>
  [getChatsLink(), chatId].join("/");

export const getNotFoundLink = () => [getChatsLink(), ""].join("/");
