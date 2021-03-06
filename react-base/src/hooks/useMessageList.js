import { nanoid } from "nanoid";
import { useCallback, useState } from "react";
import { useBotMessageList } from "./useBotMessageList";

export const useMessageList = () => {
  const [messageList, setMessageList] = useState([]);

  const addNewMessage = useCallback((text) => {
    const message = { author: "User", text, id: nanoid() };

    setMessageList((prevState) => {
      return [...prevState, message];
    });
  }, []);

  useBotMessageList(messageList, setMessageList);

  return { messageList, addNewMessage };
};
