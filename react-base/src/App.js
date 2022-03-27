import React from "react";
import "./App.sass";
import { Message } from "./components";

function App() {
  const text = "Hello, world!";
  return (
    <div>
      <Message message={text} />
    </div>
  );
}

export default App;
