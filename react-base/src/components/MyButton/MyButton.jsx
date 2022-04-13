import React from "react";
import { Button } from "@mui/material";

export const MyButton = ({ text, onBtnClick }) => {
  return (
    <Button type="submit" variant="contained" onClick={onBtnClick}>
      {text}
    </Button>
  );
};
