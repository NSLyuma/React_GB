import { useEffect } from "react";
import { useDidUpdate } from "./useDidUpdate";

const key = "task-list";

export const useCacheTaskList = ({ setMessageList, messageList }) => {
  useEffect(() => {
    const json = localStorage.getItem(key);
    if (json) {
      setMessageList(JSON.parse(json));
    }
  }, []);

  useDidUpdate(() => {
    localStorage.setItem(key, JSON.stringify(messageList));
  }, [messageList]);
};
