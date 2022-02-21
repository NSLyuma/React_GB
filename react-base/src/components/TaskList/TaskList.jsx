import React from "react";
import { TaskItem } from "../TaskItem/TaskItem";
import style from "./TaskList.module.sass";

const TaskList = ({ filteredList, onChange }) => {
  return (
    <ul className={style.task_list}>
      {filteredList.map(({ status, text }, index) => {
        return (
          // <TaskItem
          //   status={status}
          //   text={text}
          //   key={index}
          //   onChange={onChange}
          // />
          <label>
            <li
              className={
                status === false
                  ? `${style.task_item} ${style.task_item_light}`
                  : `${style.task_item} ${style.task_item_dark}`
              }
              key={index}
            >
              <input
                style={{ marginRight: 10 }}
                onChange={onChange(index, status)}
                checked={status}
                type="checkbox"
              />
              {text}
            </li>
          </label>
        );
      })}
    </ul>
  );
};

export default TaskList;
