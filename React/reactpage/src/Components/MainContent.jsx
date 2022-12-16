import React from "react";
import ReactDOM from "react-dom/client";

export default function MainContent() {
  return (
    <main>
      <h1 className="main--title">Fun facts about REACT</h1>
      <ul className="main--facts">
        <li>Was first released in 2013</li>
        <li>Was originally created by jordan wake</li>
        <li>Has well over 100k+ stars on Github</li>
        <li>Is maintained by facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
}
