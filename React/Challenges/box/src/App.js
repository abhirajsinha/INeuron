import logo from "./logo.svg";
import "./App.css";
import Box from "./Box";
import boxes from "./boxes.js";
import React from "react";

export default function App(props) {
  const [squares, setSquares] = React.useState(boxes);
  
  const squareElements = squares.map((square) => (
    <Box key={square.id} on={square.on}/>
  ));
  return <main>{squareElements}</main>;
}
