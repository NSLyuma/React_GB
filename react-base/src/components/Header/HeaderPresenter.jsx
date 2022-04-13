import React from "react";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { MyButton } from "../MyButton/MyButton";
import {
  getChatsLink,
  getGistsLink,
  getHomeLink,
  getLoginLink,
  getProfileLink,
  getRegistrationLink,
} from "../../navigation";

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
        <MenuItem onClick={onClick} component={Link} to={getHomeLink}>
          Home
        </MenuItem>
        <MenuItem onClick={onClick} component={Link} to={getGistsLink}>
          Laureates
        </MenuItem>
        <MenuItem onClick={onClick} component={Link} to={getProfileLink}>
          Profile
        </MenuItem>
        <MenuItem onClick={onClick} component={Link} to={getChatsLink}>
          Chats
        </MenuItem>
      </Menu>
    </div>
  );
};
