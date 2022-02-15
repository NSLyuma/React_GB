import "./App.sass";
import Message from "./components/Message/Message";

function App() {
  const text = "Hello, world!";
  return (
    <div>
      <Message message={text}></Message>
    </div>
  );
}

export default App;
