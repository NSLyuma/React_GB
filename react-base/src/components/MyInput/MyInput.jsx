import React, { useEffect, useRef } from "react";
import { Input } from "@mui/material";

export const MyInput = (props) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <Input sx={{ padding: 0 }} inputRef={inputRef} {...props} type="text" />
  );
};
