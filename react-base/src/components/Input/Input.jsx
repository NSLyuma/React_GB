import React from "react";
import style from "./Input.module.sass";

export const Input = (props) => {
  return <input className={style.input} {...props} type="text" />;
};
