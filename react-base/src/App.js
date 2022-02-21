import React from "react";
import "./App.sass";
import style from "./App.module.sass";
import { Form } from "./components/Form/Form";
import { Select } from "./components/Select/Select";
import TaskList from "./components/TaskList/TaskList";
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
    <div className={style.body}>
      <h1 style={{ backgroundColor: "#fff1d0", textAlign: "center" }}>
        Todo list
      </h1>
      <div className={style.task_box}>
        <Form
          handleSubmit={handleSubmit}
          onChangeInput={onChangeInput}
          inputValue={inputValue}
        />
        <Select value={filterStatus} onChange={onChangeStatus} />
      </div>
      <TaskList filteredList={filteredList} onChange={changeStatus} />

      {/* <ul>
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
      </ul> */}
    </div>
  );
}

export default App;
