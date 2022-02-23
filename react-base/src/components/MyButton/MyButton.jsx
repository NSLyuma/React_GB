import React from "react";
import { Button } from "@mui/material";

export const MyButton = ({ text }) => {
  return (
    <Button type="submit" variant="contained">
      {text}
    </Button>
  );
};
