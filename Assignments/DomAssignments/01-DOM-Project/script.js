// TASK - 01
/*  change li value Contacts to Projects*/
let targetNavUlLi = document
  .querySelector("nav")
  .querySelectorAll("ul")[0].children;

for (let i = 0; i < targetNavUlLi.length; i++) {
  var element = targetNavUlLi[i].innerText;
  if (element === "Contact") {
    targetNavUlLi[i].innerText = "Projects";
  }
}

/*  create li element iside nav > ul and give the value of Hire me to li */

// create li element
let li = document.createElement("li");

//Create a text node:
let text = document.createTextNode("Hire Me");
// Append the text node to the "li" node:
li.appendChild(text);
// Append the "li" node to the list:
console.log(document.querySelector("nav > ul").appendChild(li));

//hide footer icon
document.querySelector("footer > ul").style.visibility = "hidden";

///////////////// TASK -02 ////////////////////////////
/* Hide hire me li and change the button placeholder value */

let hideHireMe = (document.querySelector(
  "nav > ul > li:last-child"
).style.visibility = "hidden");

// change the placeholder value
let changePlaceHolderValue = document.querySelector("nav > div > input");

changePlaceHolderValue.placeholder = "Search My Project";

///////////////// TASK -03 ////////////////////////////
/* Get back placeholder value(search) and footer icon and hide the li value(hire me) */

//hide the li value(hire me)
let hideHireMeLi = (document.querySelector(
  "nav >ul >li:last-child"
).style.visibility = "hidden");

//Get back placeholder value(search)
let getBackPlaceholderValue = document.querySelector("nav div input");
getBackPlaceholderValue.placeholder = "Search";

//Get back footer icon
let getBackFooterIcon = (document.querySelector("footer ul").style.visibility =
  "visible");

///////////////// TASK -04 ///////////////////////////

/* add another image */
let targetImageDiv = document.querySelector(".hero-right-section img");
targetImageDiv.src = "./ATUL-SINGH-DP-PIC.jpeg";
targetImageDiv.style.objectFit = "contain";
targetImageDiv.style.backgroundColor = "rgb(0, 135, 135, 0.4)";

///////////////// TASK -05 ///////////////////////////

/* Create support me button in header right section and get back image */

//get back image
let getBackImage = document.querySelector(".hero-right-section img");
targetImageDiv.src = "./avtar.png";

// create support me button
let createButton = document.createElement("button");
//create text node
let buttonText = document.createTextNode("Support Me");
// append eachother
let appendEachother = createButton.appendChild(buttonText);
console.log(appendEachother);

let appendInBodyDiv = document.querySelector(".hero-right-section-btns");
appendInBodyDiv.appendChild(createButton);
