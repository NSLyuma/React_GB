import React from "react";
import style from "./Button.module.sass";

export const Button = ({ text }) => {
  return <button className={style.btn}>{text}</button>;
};
