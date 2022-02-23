import React, { useEffect, useRef } from "react";
import { Input } from "@mui/material";
// import style from "./Input.module.sass";

export const MyInput = (props) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    // <input ref={inputRef} {...props} type="text" />
    <Input sx={{ padding: 0 }} inputRef={inputRef} {...props} type="text" />
  );
};
