import { Grid, List, ListItem, ListItemText } from "@mui/material";
import { nanoid } from "nanoid";
import { Chat, Form } from "../../components";
import { useCreateForm } from "../../hooks/useCreateForm";
import { useCallback, useState } from "react";
import { chats } from "../../mocks";
import { useDispatch, useSelector } from "react-redux";
import { CREATE_CHAT_LIST, DELETE_CHAT } from "../../store/chats/actions";
import { Link } from "react-router-dom";
import { getMessagesLink } from "../../navigation";

export function Chats({ children }) {
  const chatList = useSelector((state) => state.chats.chatList);

  const dispatch = useDispatch();

  const addNewChat = useCallback((name) => {
    const chat = { name, id: nanoid() };

    dispatch({
      type: CREATE_CHAT_LIST,
      payload: chat,
    });
  }, []);

  const deleteChat = (id) => () => {
    dispatch({
      type: DELETE_CHAT,
      payload: id,
    });
  };

  const { handleSubmit, onChangeInput, inputValue } = useCreateForm({
    onSubmit: addNewChat,
  });

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
