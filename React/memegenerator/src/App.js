import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Meme from "./Components/Meme";

function App() {
  const [thingsArray, setThingsArray] = useState(["t1", "t2", "e", "2", "a"]);
  //const [thing, setThings] = useState("");

  const thingsElem = thingsArray.map(thing => <p key={thing}>{thing}</p>);

  function addItem() {
    const lastItem = `Things ${thingsArray.length + 1}`;
    setThingsArray(prevState => [...prevState, lastItem]);
  }
  return (
    <>
      <Header />
      <Meme />
      <button onClick={addItem}> Add Item</button>
      {thingsElem}
    </>
  );
}

export default App;
