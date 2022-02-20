import React from "react";
import "./App.sass";
import { Message } from "./components";
import {
  FILTER_BY_STATUS_ALL,
  FILTER_BY_STATUS_COMPLETED,
  FILTER_BY_STATUS_IN_WORK,
} from "./constants";
import { useCacheTaskList } from "./hooks/useCacheTaskList";
import { useCreateTaskForm } from "./hooks/useCreateTaskForm";
import { useFilterByStatus } from "./hooks/useFilterByStatus";
import { useTaskFilteredByStatus } from "./hooks/useTaskFilteredByStatus";
import { useTaskList } from "./hooks/useTaskList";

function App() {
  const { taskList, addNewTask, changeStatus, setTaskList } = useTaskList();

  useCacheTaskList({ setTaskList, taskList });

  const { filterStatus, onChangeStatus } = useFilterByStatus();

  const { filteredList } = useTaskFilteredByStatus({
    list: taskList,
    filterStatus,
  });

  const { handleSubmit, onChangeInput, inputValue } = useCreateTaskForm({
    onSubmit: addNewTask,
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={onChangeInput} value={inputValue} type="text" />
        <button type="submit">Save</button>
      </form>

      <select value={filterStatus} onChange={onChangeStatus}>
        <option value={FILTER_BY_STATUS_ALL}>All</option>
        <option value={FILTER_BY_STATUS_IN_WORK}>In work</option>
        <option value={FILTER_BY_STATUS_COMPLETED}>Completed</option>
      </select>

      <ul>
        {filteredList.map(({ status, text }, index) => {
          return (
            <li key={index}>
              <input
                onChange={changeStatus(index, status)}
                checked={status}
                type="checkbox"
              />
              {text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
