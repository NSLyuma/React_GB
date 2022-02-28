import { Box } from "@mui/material";
import React from "react";
import { MyButton, MyInput } from "..";

export const Form = ({
  handleSubmit,
  onChangeInput,
  inputValue,
  text,
  placeholder,
}) => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-between" }}
      component="form"
      onSubmit={handleSubmit}
    >
      <MyInput
        onChange={onChangeInput}
        value={inputValue}
        placeholder={placeholder}
      />
      <MyButton type="submit" text={text}></MyButton>
    </Box>
  );
};
