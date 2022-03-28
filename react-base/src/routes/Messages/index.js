import React, { useEffect } from "react";
import { useCreateForm } from "../../hooks/useCreateForm";
import { Redirect, useParams } from "react-router-dom";
import { getNotFoundLink } from "../../navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  createBotMessageThunk,
  createMessageThunk,
} from "../../store/messages/actions";
import { nanoid } from "nanoid";
import { getChatList } from "../../store/chats/selectors";
import {
  getErrorMessageList,
  getIsLoadingMessageList,
  getMessageListByChats,
} from "../../store/messages/selectors";
import { MessagesPresenter } from "./MessagesPresenter";

export function Messages() {
  const { chatId } = useParams();
  const chatList = useSelector(getChatList);

  const messageList = useSelector(getMessageListByChats(chatId));
  const isLoading = useSelector(getIsLoadingMessageList);
  const error = useSelector(getErrorMessageList);

  const dispatch = useDispatch();

  const addNewMessage = (text) => {
    const message = { id: nanoid(), author: "User", text };

    dispatch(createMessageThunk(chatId, message));
  };

  useEffect(() => {
    const botMessage = { author: "Bot", text: "Some text" };
    if (!messageList) {
      return;
    }
    if (messageList.length !== 0) {
      if (messageList[messageList.length - 1].author === "User") {
        dispatch(createBotMessageThunk(chatId, botMessage));
      }
    }
  }, [messageList]);

  const { handleSubmit, onChangeInput, inputValue } = useCreateForm({
    onSubmit: addNewMessage,
  });

  if (!chatList.find((item) => item.id === chatId)) {
    return <Redirect to={getNotFoundLink()} />;
  }

  return (
    <MessagesPresenter
      error={error}
      handleSubmit={handleSubmit}
      onChangeInput={onChangeInput}
      inputValue={inputValue}
      messageList={messageList}
      isLoading={isLoading}
    />
  );
}
