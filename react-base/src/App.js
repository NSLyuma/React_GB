import React from "react";
import { Container } from "@mui/material";
import { Paper } from "@mui/material";
// import "./App.sass";
// import style from "./App.module.sass";
import { Form, Message } from "./components";
import { useCreateMessageForm } from "./hooks/useCreateMessageForm";
import { useMessageList } from "./hooks/useMessageList";

function App() {
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
      maxWidth="xs"
    >
      <Paper
        sx={{ padding: "20px", height: "80vh", width: "100%" }}
        elevation={6}
      >
        <Form
          handleSubmit={handleSubmit}
          onChangeInput={onChangeInput}
          inputValue={inputValue}
        />
        <Message messageList={messageList} />
      </Paper>
    </Container>
  );
}

export default App;
