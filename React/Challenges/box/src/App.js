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
      const newSquares = [];
      for (let i = 0; i < prevSquares.length; i++) {
        const currentSquare = prevSquares[i];
        if (currentSquare.id === id) {
          const updatedSquare = {
            ...currentSquare,
            on: !currentSquare.on,
          };
          newSquares.push(updatedSquare);
        } else {
          newSquares.push(currentSquare);
        }
      }
      return newSquares;
    });
  }

  const squareElements = squares.map((square) => (
    <Box key={square.id} on={square.on} id={square.id} toggle={toggle} />
  ));
  return <main>{squareElements}</main>;
}