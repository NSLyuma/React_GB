import React from "react";
import { Container } from "@mui/material";
import { Paper } from "@mui/material";
import { Form, Message } from "../../components";
import { useCreateForm } from "../../hooks/useCreateForm";
import { useMessageList } from "../../hooks/useMessageList";
import { Redirect, useParams } from "react-router-dom";
import { chats } from "../Chats";
import { getNotFoundLink } from "../../navigation";

export function Messages() {
  const { chatId } = useParams();

  const { messageList, addNewMessage } = useMessageList();

  const { handleSubmit, onChangeInput, inputValue } = useCreateForm({
    onSubmit: addNewMessage,
  });

  // if (!chats.find((item) => item.id === chatId)) {
  //   return <Redirect to={getNotFoundLink()} />;
  // }

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
