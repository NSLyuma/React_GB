import { Grid, List, ListItem, ListItemText } from "@mui/material";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { getMessagesLink } from "../../navigation";

export const chats = Array.from({ length: 5 }).map((_, index) => ({
  name: `Chat ${index + 1}`,
  id: nanoid(),
}));

export const Chats = ({ children }) => {
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
            {chats.map(({ name, id }) => {
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
                  <div style={{ cursor: "pointer" }}>X</div>
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
