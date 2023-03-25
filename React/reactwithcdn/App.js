const heading = React.createElement("h1", { id: "heading" }, "Hello World!");

/*
React.createElement("The tag you want to create", {all its attributes means id and class that the tag will have}, The content that the tag will hold under it);
*/

/*
# Make this structure using React.createElement()

<div id="parent">
    <div id="child">
        <h1>Hello World From React</h1>
    </div>
</div>


React.createElement("div", {id:"parent"},
React.createElement("div", {id:"child"},
React.createElement("h1", {}, "Hello World From React")));
*/

console.log(heading); // This heading is not a h1 tag yet, currently it is a object which is a React Element.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Now this root.render will create the h1 tag here from the heading and attach it to the <div id='root'> </div>
root.render(heading);
