import React from "react";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { MyButton } from "../MyButton/MyButton";

export const HeaderPresenter = ({
  onBtnClick,
  anchorEl,
  open,
  onClose,
  onClick,
}) => {
  return (
    <div>
      <MyButton text="Menu" onBtnClick={onBtnClick} />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={onClick} component={Link} to={"/"}>
          Home
        </MenuItem>
        <MenuItem onClick={onClick} component={Link} to={"/gists"}>
          Laureates
        </MenuItem>
        <MenuItem onClick={onClick} component={Link} to={"/profile"}>
          Profile
        </MenuItem>
        <MenuItem onClick={onClick} component={Link} to={"/chats"}>
          Chats
        </MenuItem>
      </Menu>
    </div>
  );
};
