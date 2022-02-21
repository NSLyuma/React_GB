import React from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import style from "./Form.module.sass";

export const Form = ({ handleSubmit, onChangeInput, inputValue }) => {
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <Input onChange={onChangeInput} value={inputValue} type="text" />
      <Button type="submit" text={"Save"} />
    </form>
  );
};
