// Task-01: Give the h1 color red
let targetH1 = document.querySelector("h1.title");
targetH1.style.color = "red";

// Task-02: when hover on button background color will be change and change the h1 color

//h1 color change
document.querySelector("h1.title").style.color = "black";

// button background color change when hover on
let buttonBackgroundcolor = document.querySelector(".add-to-cart");

buttonBackgroundcolor.addEventListener("mouseenter", () => {
  buttonBackgroundcolor.style.backgroundColor = "red";
});

buttonBackgroundcolor.addEventListener("mouseleave", () => {
  buttonBackgroundcolor.style.backgroundColor = "green";
});
