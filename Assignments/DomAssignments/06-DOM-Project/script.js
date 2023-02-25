// Task-01: add ineuron image and hide first image

// hide first image
document.querySelector(".logo").style.display = "none";
// target header to injecting ineuron image
let targetHeader = document.querySelector("header");
// create img tag and add image path
let createImg = document.createElement("img");
createImg.src = "./assets/ineuron-logo.png";
// append image into header
targetHeader.appendChild(createImg);

// Task-02: change prize premium section card

document.querySelector(".app_price span").innerHTML = "$10";
