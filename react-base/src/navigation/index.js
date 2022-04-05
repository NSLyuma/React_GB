export const getHomeLink = () => "/";

export const getGistsLink = () => ["", "gists"].join("/");

export const getProfileLink = () => ["", "profile"].join("/");

export const getChatsLink = () => ["", "chats"].join("/");

export const getMessagesLink = (chatId = ":chatId") =>
  [getChatsLink(), chatId].join("/"); // "/chats/:chatId"

export const getNotFoundLink = () => [getChatsLink(), ""].join("/");
