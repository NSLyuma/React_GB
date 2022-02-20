import React from "react";
import "./App.sass";
import { useCreateMessageForm } from "./hooks/useCreateMessageForm";
import { useMessageList } from "./hooks/useMessageList";

function App() {
  const { messageList, addNewMessage } = useMessageList();

  const { handleSubmit, onChangeInput, inputValue } = useCreateMessageForm({
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
