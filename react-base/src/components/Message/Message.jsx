import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";

export const Message = ({ messageList }) => {
  return (
    <List sx={{ padding: 0, marginTop: 2 }}>
      {messageList?.map(({ author, text }, id) => {
        return (
          <ListItem
            sx={{
              border: "2px solid #4cfccb",
              borderRadius: "25px",
              marginBottom: "10px",
            }}
            key={id}
          >
            <ListItemText>
              {author}: {text}
            </ListItemText>
          </ListItem>
        );
      })}
    </List>
  );
};
