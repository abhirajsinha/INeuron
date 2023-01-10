import boxes from "./boxes.js";
import React from "react";

export default function Box(props) {
  const [on, setOn] = React.useState(props.on);
  const styles = {
    backgroundColor: props.on ? "#222222" : "lightblue",
  };
  return (
    <div
      style={styles}
      onClick={() => props.toggle(props.id)}
      className="box"
    ></div>
  );
}