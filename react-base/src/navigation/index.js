export const getHomeLink = () => "/";

export const getRegistrationLink = () => ["", "signup"].join("/");

export const getLoginLink = () => ["", "login"].join("/");

export const getGistsLink = () => ["", "gists"].join("/");

export const getProfileLink = () => ["", "profile"].join("/");

export const getChatsLink = () => ["", "chats"].join("/");

export const getMessagesLink = (chatId = ":chatId") =>
  [getChatsLink(), chatId].join("/"); // "/chats/:chatId"

export const getNotFoundLink = () => [getChatsLink(), ""].join("/");
