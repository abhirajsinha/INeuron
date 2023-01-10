import boxes from "./boxes.js";
import React from "react";

export default function Box(props) {
    let color = props.on ? "#222222" : "grey";
    const styles = {
        backgroundColor: color,
    };
    return <div style={styles} className="box"></div>;
}
