import boxes from "./boxes.js";
import React from "react";

export default function Box(props) {
  const [on, setOn] = React.useState(props.on);
  function toggle() {
    setOn((prevOn) => !prevOn);
  }
  const styles = {
    backgroundColor: on ? "#222222" : "lightblue",
  };
  return <div style={styles} onClick={toggle} className="box"></div>;
}
