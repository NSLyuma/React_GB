import React from "react";
import {
  FILTER_BY_STATUS_ALL,
  FILTER_BY_STATUS_COMPLETED,
  FILTER_BY_STATUS_IN_WORK,
} from "../../constants";
import style from "./Select.module.sass";

export const Select = ({ value, onChange }) => {
  return (
    <select className={style.select} value={value} onChange={onChange}>
      <option className={style.option} value={FILTER_BY_STATUS_ALL}>
        All
      </option>
      <option className={style.option} value={FILTER_BY_STATUS_IN_WORK}>
        In work
      </option>
      <option className={style.option} value={FILTER_BY_STATUS_COMPLETED}>
        Completed
      </option>
    </select>
  );
};
