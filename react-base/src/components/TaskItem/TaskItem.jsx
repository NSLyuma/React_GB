import React from "react";
import { Input } from "../Input/Input";
import style from "./TaskItem.module.sass";

export const TaskItem = ({ status, text, onChange }) => {
  return (
    <li className={style.task_item}>
      <Input checked={status} onChange={onChange} type="checkbox" />
      {text}
    </li>
  );
};
