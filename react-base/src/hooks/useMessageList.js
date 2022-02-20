import { useCallback, useEffect, useState } from "react";

export const useMessageList = () => {
  const [messageList, setMessageList] = useState([]);

  const addNewMessage = useCallback((text) => {
    const message = { author: "User", text };

    setMessageList((prevState) => {
      return [...prevState, message];
    });
  }, []);

  useEffect(() => {
    const botMessage = { author: "Bot", text: "Some text" };
    if (messageList.length !== 0) {
      if (messageList[messageList.length - 1].author === "User") {
        setTimeout(() => {
          setMessageList((prevState) => {
            return [...prevState, botMessage];
          });
        }, 1000);
      }
    }
  }, [messageList]);

  return { messageList, addNewMessage };
};
