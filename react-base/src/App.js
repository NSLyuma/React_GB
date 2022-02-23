import React from "react";
import { Container } from "@mui/material";
import { Paper } from "@mui/material";
import { List, ListItem, ListItemText } from "@mui/material";
import { Form, Message } from "./components";
import { useCreateMessageForm } from "./hooks/useCreateMessageForm";
import { useMessageList } from "./hooks/useMessageList";

function App() {
  const { messageList, addNewMessage } = useMessageList();

  const chatList = [
    { name: "Chat1", id: 1 },
    { name: "Chat2", id: 2 },
    { name: "Chat3", id: 3 },
  ];

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
        <List sx={{ borderRight: "2px solid #4cfccb", paddingRight: 2 }}>
          {chatList.map(({ name, id }) => {
            return (
              <ListItem
                sx={{
                  border: "2px solid #4cfccb",
                  borderRadius: "25px",
                  marginBottom: 1,
                }}
                key={id}
              >
                <ListItemText>{name}</ListItemText>
              </ListItem>
            );
          })}
        </List>
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

export default App;
