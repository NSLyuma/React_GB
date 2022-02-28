import React from "react";
import { getMessagesLink } from "../../navigation";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText } from "@mui/material";

export const Chat = ({ chatList }) => {
  return (
    <List
      sx={{
        borderRight: "2px solid #4cfccb",
        paddingRight: 2,
        marginLeft: 4,
      }}
    >
      {chatList.map(({ name, id }) => {
        return (
          <ListItem
            component={Link}
            to={getMessagesLink(id)}
            sx={{
              border: "2px solid #4cfccb",
              borderRadius: "25px",
              marginBottom: 1,
              color: "#fc4c7e",
            }}
            key={id}
          >
            <ListItemText>{name}</ListItemText>
          </ListItem>
        );
      })}
    </List>
  );
};
