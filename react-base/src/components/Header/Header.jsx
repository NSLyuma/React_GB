import React from "react";
import { HeaderPresenter } from "./HeaderPresenter";

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
    <HeaderPresenter
      onBtnClick={handleClick}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      onClick={handleClose}
    />
  );
};
