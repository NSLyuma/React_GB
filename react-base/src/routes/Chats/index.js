import { Grid } from "@mui/material";
import { nanoid } from "nanoid";
import { Chat } from "../../components";

export const chats = Array.from({ length: 5 }).map((_, index) => ({
  name: `Chat ${index + 1}`,
  id: nanoid(),
}));

export function Chats({ children }) {
  return (
    <div>
      <h1>Chats</h1>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Chat chats={chats} />
        </Grid>
        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
}
