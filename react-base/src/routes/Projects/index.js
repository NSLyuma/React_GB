import { Grid, List, ListItem, ListItemText } from "@mui/material";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { getTasksLink } from "../../navigation";

export const projects = Array.from({ length: 10 }).map((_, index) => ({
  id: nanoid(),
  name: `project ${index}`,
}));

export const Projects = ({ children }) => {
  return (
    <div>
      <h1>Projects</h1>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <List>
            {projects.map((item) => (
              <ListItem
                key={item.id}
                component={Link}
                to={getTasksLink(item.id)}
              >
                <ListItemText>{item.name}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};
