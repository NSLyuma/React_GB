import React from "react";
import { Container } from "@mui/material";
import { Paper } from "@mui/material";
import { Form, Message } from "../../components";
import { useCreateMessageForm } from "../../hooks/useCreateMessageForm";
import { useMessageList } from "../../hooks/useMessageList";

export function Messages() {
  const { messageList, addNewMessage } = useMessageList();

  const { handleSubmit, onChangeInput, inputValue } = useCreateMessageForm({
    onSubmit: addNewMessage,
  });

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
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
          />
          <Message messageList={messageList} />
        </Container>
      </Paper>
    </Container>
  );
}
