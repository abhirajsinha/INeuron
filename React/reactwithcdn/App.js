const heading = React.createElement("h1", { id: "heading" }, "Hello World!");
console.log(heading); // This heading is not a h1 tag yet, currently it is a Javascript object where the type is h1
const root = ReactDOM.createRoot(document.getElementById("root"));

// Now this root.render will create the h1 tag here from the heading and attach it to the <div id='root'> </div>
root.render(heading);
