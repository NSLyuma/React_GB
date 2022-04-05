import React from "react";
import { useCreateForm } from "../../hooks/useCreateForm";
import { Redirect, useParams } from "react-router-dom";
import { getNotFoundLink } from "../../navigation";
import { useDispatch, useSelector } from "react-redux";
import { createMessageThunk } from "../../store/messages/actions";
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
    dispatch(createMessageThunk(text, chatId));
  };

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
