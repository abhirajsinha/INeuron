// right form
let rightForm = document.querySelector(".mainRight form");

let rightUserName = document.querySelector(".mainRight form .userName");

let rightEmail = document.querySelector(".mainRight form .userEmail");

let rightUserMessage = document.querySelector(".mainRight form .userMessage");

// left form///////
let leftOutputUserName = document.querySelector(".mainLeft form .enterName");

let leftOutputUserEmail = document.querySelector(".mainLeft form .enterMail");

let leftOutputUserMessage = document.querySelector(
  ".mainLeft form .enterMessage"
);

rightForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let a = rightUserName.value;
  let b = rightEmail.value;
  let c = rightUserMessage.value;

  leftOutputUserName.value = a;
  leftOutputUserEmail.value = b;
  leftOutputUserMessage.value = c;
});
