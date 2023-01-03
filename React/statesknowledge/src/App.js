import logo from './logo.svg';
import './App.css';
import React from 'react'

function App() {
  const [thingsArray, setThingsArrays] = React.useState(["Things 1", "Things 2"]);

  function addItem(){
    setThingsArrays(prevState=>{
      return [...prevState, `Things ${prevState.length+1}`];
    })
  }
  const thingsArrayElements =  thingsArray.map(thing => <p key={thing}>{thing}</p>)
  return (
    <div className="App">
      <button onClick={addItem}>Add Item</button>
      {thingsArrayElements}
    </div>
  );
}

export default App;
