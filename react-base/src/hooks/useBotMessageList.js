import { useEffect } from "react";

export const useBotMessageList = (messageList, setMessageList) => {
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
};
