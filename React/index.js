//Normal Html
// const h1 = document.createElement("h1");
// h1.textContent = "Hello React";
// h1.className = "header";
// console.log("Normal HTML", h1);

// //JSX
// const elem = <h1 className="header">This is JSX</h1>
// console.log("JSX", elem);

//Conmponents
function MainContent() {
  return <h1>I'm learning React</h1>;
}

function Navbar() {
  return (
    <nav>
      <h1>Abhi's Bistro</h1>
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

//JSX - Javascript xml, React Syntax
ReactDOM.render(
  <div>
    <MainContent />
    <Navbar />
  </div>,
  document.getElementById("root")
);
