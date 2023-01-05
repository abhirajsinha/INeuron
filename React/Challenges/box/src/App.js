import logo from "./logo.svg";
import "./App.css";
import boxes from "./boxes.js";
import React from "react";

export default function App(props) {
  const [squares, setSquares] = React.useState(boxes);
  let color = props.darkmode ? "#222222" : "#cccccc";
  const styles = {
    backgroundColor: color,
  };
  const squareElements = squares.map((square) => (
    <div style={styles} className="box" key={square.id}></div>
  ));
  return <main>{squareElements}</main>;
}
