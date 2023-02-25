// Task-01: set overflow auto to get scrollbar
let scroll = document.querySelector(".new");
scroll.style.overflow = "auto";
scroll.style.border = "2px solid red";

//task-02: hide scrollbar and hide background lined point
let scrollAgain = document.querySelector(".new");
scrollAgain.style.overflow = "hidden";
scrollAgain.style.border = "none";

// hide body background image

let bodyBackgroundImage = document.querySelector("body");
bodyBackgroundImage.style.backgroundImage.visibility = "hidden";

// Task-03: Toggle the button and get back nav value and body background image make visible

//body backgroundImage make visible
let I = document.querySelector("body");
bodyBackgroundImage.style.backgroundImage.visibility = "visible";

/////////////////////////////////////////////////
// target the button
let a = document.querySelector("button");

let count = 0;

a.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(e.pointerId);
  // console.log(e);
  count += 1;
  //console.log(`count ${count}`);

  if (count % 2 == 0) {
    //console.log("even");
    document
      .querySelector("#navbarTogglerDemo01")
      .setAttribute("class", "collapse navbar-collapse");
  } else if (count % 2 !== 0) {
    //console.log("odd");
    document
      .querySelector(".collapse")
      .setAttribute("class", "collapse.show navbar-collapse");
  }
});
