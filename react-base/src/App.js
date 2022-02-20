import React, { useCallback, useState } from "react";
import "./App.sass";

function App() {
  const [messageList, setMessageList] = useState("");

  const onChangeMessage = (event) => {
    setMessageList(event.target.value);
  };

  return (
    <div>
      <div>{messageList}</div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input value={messageList} onChange={onChangeMessage} type="text" />
        <button type="submit">Send message</button>
      </form>
    </div>
  );
}

export default App;
