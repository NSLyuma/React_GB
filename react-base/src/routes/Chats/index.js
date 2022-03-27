import { Grid } from "@mui/material";
import { nanoid } from "nanoid";
import { Chat, Form } from "../../components";
import { useCreateForm } from "../../hooks/useCreateForm";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createChat, deleteChat, DELETE_CHAT } from "../../store/chats/actions";
import { getChatList } from "../../store/chats/selectors";

export function Chats({ children }) {
  const chatList = useSelector(getChatList);

  const dispatch = useDispatch();

  const addNewChat = useCallback((name) => {
    const chat = { id: nanoid(), name };

    dispatch(createChat(chat));
  }, []);

  const removeChat = (id) => () => {
    dispatch(deleteChat(id));
  };

  const { handleSubmit, onChangeInput, inputValue } = useCreateForm({
    onSubmit: addNewChat,
  });

  return (
    <div>
      <h1>Chats</h1>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Chat chatList={chatList} removeChat={removeChat} />
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
