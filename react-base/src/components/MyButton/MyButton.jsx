import React from "react";
import { Button } from "@mui/material";
// import style from "./Button.module.sass";

export const MyButton = ({ text }) => {
  return (
    <Button type="submit" variant="contained">
      {text}
    </Button>
  );
};
