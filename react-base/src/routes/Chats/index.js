import { Grid } from "@mui/material";
import { nanoid } from "nanoid";
import { Chat, Form } from "../../components";
import { useCreateForm } from "../../hooks/useCreateForm";
import { useCallback, useState } from "react";
import { chats } from "../../mocks";

export function Chats({ children }) {
  const [chatList, setChatList] = useState(chats);

  const addNewChat = useCallback((name) => {
    const chat = { name, id: nanoid() };

    setChatList((prevState) => {
      return [...prevState, chat];
    });
  }, []);

  const { handleSubmit, onChangeInput, inputValue } = useCreateForm({
    onSubmit: addNewChat,
  });

  const deleteChat = (id) => {
    setChatList((prevState) => prevState.filter((el) => el.id !== id));
  };

  return (
    <div>
      <h1>Chats</h1>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Chat chatList={chatList} deleteChat={deleteChat} />
          <Form
            handleSubmit={handleSubmit}
            onChangeInput={onChangeInput}
            inputValue={inputValue}
            text="Add chat"
            placeholder="Chat name"
          />
        </Grid>
        <Grid item xs={8}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
}
