import { useState } from "react";
import { Drawer } from "@mui/material";
import { Button } from "@mui/material";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import { getHomeLink, getProjectsLink } from "../../navigation";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  return (
    <>
      <Button onClick={toggleDrawer(true)}>Menu</Button>
      <Drawer anchor={"left"} open={isOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem component={Link} to={getHomeLink()}>
            Home
          </ListItem>
          <ListItem component={Link} to={getProjectsLink()}>
            Projects
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};
