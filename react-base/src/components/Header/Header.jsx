import React from "react";
import { Button } from "@mui/material";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

export const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button id="basic-button" onClick={handleClick}>
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose} component={Link} to={"/"}>
          Home
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to={"/profile"}>
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to={"/chats"}>
          Chats
        </MenuItem>
      </Menu>
    </div>
  );
};
