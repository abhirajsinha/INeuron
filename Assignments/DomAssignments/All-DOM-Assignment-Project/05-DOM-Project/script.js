//Task-01 add btn and change card detail text color and add 6th card.
//create element tag a
let a = document.createElement("a");
//create text
let aText = document.createTextNode("Pro Subscription");
a.appendChild(aText);
//add class btn
a.classList.add("btn");
// target div
let divTarget = document.querySelector(".nav-center div:last-child");
// append a into targeted div
divTarget.appendChild(a);

//change card detail text color
let cardTextColorChange = document.querySelectorAll(".card h5,p");
cardTextColorChange.forEach((value) => {
  value.style.color = "blue";
});
//console.log(cardTextColorChange);

//add 6th card
// create card
let create6thCard = document.createElement("div");
create6thCard.classList.add("card");

let appendigParents = document.querySelector(".recipe-gallery");
appendigParents.appendChild(create6thCard);
console.log(appendigParents);

///////////////////////////////////////////////////
let ele = document.querySelector(".card");
let makeClone = ele.cloneNode(true);

document.querySelector(".recipe-gallery").appendChild(makeClone);
