import React from "react";
import "./App.sass";
import { useCacheTaskList } from "./hooks/useCacheTaskList";
import { useCreateTaskForm } from "./hooks/useCreateTaskForm";
import { useTaskList } from "./hooks/useTaskList";

function App() {
  const { messageList, addNewMessage, setMessageList } = useTaskList();

  useCacheTaskList({ setMessageList, messageList });

  const { handleSubmit, onChangeInput, inputValue } = useCreateTaskForm({
    onSubmit: addNewMessage,
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={onChangeInput} value={inputValue} type="text" />
        <button type="submit">Save</button>
      </form>

      {messageList.map(({ author, text }, index) => {
        return (
          <p key={index}>
            {author}: {text}
          </p>
        );
      })}
    </div>
  );
}

export default App;
