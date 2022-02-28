import { Grid } from "@mui/material";
import { nanoid } from "nanoid";
import { Chat, Form } from "../../components";
import { useCreateForm } from "../../hooks/useCreateForm";
import { useChatList } from "../../hooks/useChatList";

export const chats = Array.from({ length: 5 }).map((_, index) => ({
  name: `Chat ${index + 1}`,
  id: nanoid(),
}));

export function Chats({ children }) {
  const { chatList, addNewChat } = useChatList();

  const { handleSubmit, onChangeInput, inputValue } = useCreateForm({
    onSubmit: addNewChat,
  });

  return (
    <div>
      <h1>Chats</h1>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Chat chatList={chatList} />
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
