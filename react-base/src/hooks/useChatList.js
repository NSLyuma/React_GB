import { nanoid } from "nanoid";
import { useCallback, useState } from "react";

export const useChatList = () => {
  const [chatList, setChatList] = useState([]);

  const addNewChat = useCallback((name) => {
    const chat = { name, id: nanoid() };

    setChatList((prevState) => {
      return [...prevState, chat];
    });
  }, []);

  return { chatList, addNewChat };
};
