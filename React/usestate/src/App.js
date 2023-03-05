import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    if(count===0){
      return;
    }
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Counter</h1>
      <div>{count}</div>
      <div>
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount}>-</button>
      </div>
    </div>
  );
}

export default App;
