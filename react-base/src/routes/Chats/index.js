import { Grid, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

export const Chats = ({ children }) => {
  const chatList = [
    { name: "Chat 1", id: 1 },
    { name: "Chat 2", id: 2 },
    { name: "Chat 3", id: 3 },
    { name: "Chat 4", id: 4 },
    { name: "Chat 5", id: 5 },
  ];

  return (
    <div>
      <h1>Chats</h1>
      <Grid container spacing={2}>
        <Grid item xs={3}>
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
                  to={`/chats/${id}`}
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
        </Grid>
        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};
