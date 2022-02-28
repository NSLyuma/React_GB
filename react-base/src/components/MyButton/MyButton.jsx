import React from "react";
import { Button } from "@mui/material";

export const MyButton = ({ text, onClick }) => {
  return (
    <Button type="submit" variant="contained" onClick={onClick}>
      {text}
    </Button>
  );
};
