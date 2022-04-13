import React from "react";
import { Grid } from "@mui/material";
import { ChatList, Form } from "../../components";

export const ChatsPresenter = ({
  chatList,
  removeChat,
  handleSubmit,
  onChangeInput,
  inputValue,
  children,
}) => {
  return (
    <div>
      <h1>Chats</h1>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <ChatList chatList={chatList} removeChat={removeChat} />
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
};
