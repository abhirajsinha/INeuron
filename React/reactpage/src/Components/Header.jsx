import React from 'react';
import ReactDOM from 'react-dom/client';
import reactLogo from "../images/React.png"

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={reactLogo} alt="ReactLogo" width="80px"></img>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}