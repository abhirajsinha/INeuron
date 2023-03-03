import { useState } from "react";
import Particle from "./Components/Particle";
import reactLogo from "./assets/react.svg";
import Todo from "./Components/Todo";
import TodoWrapper from "./Components/TodoWrapper";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Particle />
      <TodoWrapper />
    </>
  );
}

export default App;
