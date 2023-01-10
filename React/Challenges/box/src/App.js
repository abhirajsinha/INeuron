import logo from "./logo.svg";
import "./App.css";
import Box from "./Box";
import boxes from "./boxes.js";
import React from "react";

export default function App(props) {
  const [squares, setSquares] = React.useState(boxes);

  function toggle(id) {
    // console.log(id);
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  const squareElements = squares.map((square) => (
    <Box key={square.id} on={square.on} id={square.id} toggle={toggle} />
  ));
  return <main>{squareElements}</main>;
}