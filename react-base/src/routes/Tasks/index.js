import React from "react";
import { useParams } from "react-router-dom";
import style from "../../App.sass";
import { Form } from "../../components/Form/Form";
import { Select } from "../../components/Select/Select";
import { TaskList } from "../../components/TaskList/TaskList";
import { useCacheTaskList } from "../../hooks/useCacheTaskList";
import { useCreateTaskForm } from "../../hooks/useCreateTaskForm";
import { useFilterByStatus } from "../../hooks/useFilterByStatus";
import { useTaskFilteredByStatus } from "../../hooks/useTaskFilteredByStatus";
import { useTaskList } from "../../hooks/useTaskList";

export const Tasks = () => {
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
      <h1>Todo list</h1>
      <div className={style.task_box}>
        <Form
          handleSubmit={handleSubmit}
          onChangeInput={onChangeInput}
          inputValue={inputValue}
        />
        <Select value={filterStatus} onChange={onChangeStatus} />
      </div>
      <TaskList filteredList={filteredList} onChange={changeStatus} />
    </div>
  );
};
