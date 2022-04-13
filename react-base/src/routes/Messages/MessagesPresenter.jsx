import React from "react";
import { Container } from "@mui/material";
import { Paper } from "@mui/material";
import { Form, Message } from "../../components";

export const MessagesPresenter = ({
  error,
  handleSubmit,
  onChangeInput,
  inputValue,
  messageList,
  isLoading,
}) => {
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
          {error && <p>ERROR</p>}
          <Form
            handleSubmit={handleSubmit}
            onChangeInput={onChangeInput}
            inputValue={inputValue}
            text="Send"
            placeholder="Enter your message"
          />
          <Message messageList={messageList} />
          {isLoading && <p>Loading...</p>}
        </Container>
      </Paper>
    </Container>
  );
};
