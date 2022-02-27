import { List, ListItem, ListItemText } from "@mui/material";

export const Chats = ({ children }) => {
  const chatList = [
    { name: "Chat1", id: 1 },
    { name: "Chat2", id: 2 },
    { name: "Chat3", id: 3 },
  ];

  return (
    <div>
      <h1>Chats</h1>
      {children}
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
    </div>
  );
};
