import React from "react";
import { ChatItem } from "../ChatItem/ChatItem";

export const ChatList = ({ chatList, removeChat }) => {
  return <ChatItem chatList={chatList} removeChat={removeChat} />;
};
