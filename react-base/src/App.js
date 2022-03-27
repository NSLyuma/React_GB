import React from "react";
import "./App.sass";
import style from "./App.module.sass";
import { Form, Message } from "./components";
import { useCreateMessageForm } from "./hooks/useCreateMessageForm";
import { useMessageList } from "./hooks/useMessageList";

function App() {
  const { messageList, addNewMessage } = useMessageList();

  const { handleSubmit, onChangeInput, inputValue } = useCreateMessageForm({
    onSubmit: addNewMessage,
  });

  return (
    <div className={style.body}>
      <Form
        handleSubmit={handleSubmit}
        onChangeInput={onChangeInput}
        inputValue={inputValue}
      />
      <Message messageList={messageList} />
    </div>
  );
}

export default App;
