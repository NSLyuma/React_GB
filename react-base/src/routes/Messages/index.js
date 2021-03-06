import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { Paper } from "@mui/material";
import { Form, Message } from "../../components";
import { useCreateForm } from "../../hooks/useCreateForm";
import { Redirect, useParams } from "react-router-dom";
import { getNotFoundLink } from "../../navigation";
import { useDispatch, useSelector } from "react-redux";
import { createMessage } from "../../store/messages/actions";
import { nanoid } from "nanoid";
import { getChatList } from "../../store/chats/selectors";
import { getMessageListByChats } from "../../store/messages/selectors";

export function Messages() {
  const { chatId } = useParams();
  const chatList = useSelector(getChatList);

  const messageList = useSelector(getMessageListByChats(chatId));

  const dispatch = useDispatch();

  const addNewMessage = (text) => {
    const message = { id: nanoid(), author: "User", text };

    dispatch(createMessage(chatId, message));
  };

  useEffect(() => {
    const botMessage = { author: "Bot", text: "Some text" };
    if (!messageList) {
      return;
    }
    if (messageList.length !== 0) {
      if (messageList[messageList.length - 1].author === "User") {
        setTimeout(() => {
          dispatch(createMessage(chatId, botMessage));
        }, 1000);
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
    <Container
      sx={{
        display: "flex",
        height: "100vh",
      }}
      maxWidth="sm"
    >
      <Paper
        sx={{ display: "flex", padding: 2, height: "80vh", width: "100%" }}
        elevation={6}
      >
        <Container sx={{ padding: 0, margin: 0 }}>
          <Form
            handleSubmit={handleSubmit}
            onChangeInput={onChangeInput}
            inputValue={inputValue}
            text="Send"
            placeholder="Enter your message"
          />
          <Message messageList={messageList} />
        </Container>
      </Paper>
    </Container>
  );
}
