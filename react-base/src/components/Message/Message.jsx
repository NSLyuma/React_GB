import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";
// import style from "./Message.module.sass";

export const Message = ({ messageList }) => {
  return (
    <List>
      {messageList.map(({ author, text }, id) => {
        return (
          <ListItem
            sx={{
              border: "1px solid black",
              borderRadius: "25px",
              marginBottom: "10px",
            }}
            key={id}
          >
            <ListItemText>
              {author}: {text}
            </ListItemText>
          </ListItem>
          //   <div
          //   className={
          //     author === "User" ? style.message_user : style.message_bot
          //   }
          //   key={id}
          // >
          //   {author}: {text}
          // </div>
        );
      })}
    </List>
  );
};
