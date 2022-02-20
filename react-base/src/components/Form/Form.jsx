import React from "react";
import { Button, Input } from "..";
import style from "./Form.module.sass";

export const Form = ({ handleSubmit, onChangeInput, inputValue }) => {
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <Input
        onChange={onChangeInput}
        value={inputValue}
        type="text"
        placeholder="Enter your message"
      />
      <Button type="submit" text="Send" />
    </form>
  );
};
