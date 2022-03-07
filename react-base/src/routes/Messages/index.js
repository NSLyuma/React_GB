import React, { useCallback, useEffect } from "react";
import { Container } from "@mui/material";
import { Paper } from "@mui/material";
import { Form, Message } from "../../components";
import { useCreateForm } from "../../hooks/useCreateForm";
import { Redirect, useParams } from "react-router-dom";
import { getNotFoundLink } from "../../navigation";
import { chats } from "../../mocks";
import { useDispatch, useSelector } from "react-redux";
import { CREATE_MESSAGE_LIST } from "../../store/messages/actions";
import { nanoid } from "nanoid";

export function Messages() {
  const { chatId } = useParams();

  const messageList = useSelector((state) => state.messages.messageList);

  const dispatch = useDispatch();

  const addNewMessage = useCallback((text) => {
    const message = { author: "User", text, id: nanoid() };

    dispatch({
      type: CREATE_MESSAGE_LIST,
      payload: message,
    });
  }, []);

  useEffect(() => {
    const botMessage = { author: "Bot", text: "Some text" };
    if (messageList.length !== 0) {
      if (messageList[messageList.length - 1].author === "User") {
        setTimeout(() => {
          dispatch({
            type: CREATE_MESSAGE_LIST,
            payload: botMessage,
          });
        }, 1000);
      }
    }
  }, [messageList]);

  const { handleSubmit, onChangeInput, inputValue } = useCreateForm({
    onSubmit: addNewMessage,
  });

  if (!chats.find((item) => item.id === chatId)) {
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
