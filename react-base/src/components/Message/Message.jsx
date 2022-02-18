import React from "react";
import style from "./Message.module.sass";

export const Message = ({ message }) => {
  return <div className={style.message}>{message}</div>;
};
