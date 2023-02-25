// TASK-02
/* Create new about faq section */
let createSkillFaqDiv = document.createElement("div");

createSkillFaqDiv.classList.add("accordian");
console.log(createSkillFaqDiv);

let h3 = document.createElement("h3");
createSkillFaqDiv.appendChild(h3).innerHTML = "Skill";

let p = document.createElement("p");
createSkillFaqDiv.appendChild(p);
let textNode = document.createTextNode(
  "Some of my popular hobbies are travelling and exploring the new technologies from all over the world."
);
p.appendChild(textNode);

document.querySelector(".accordian-wrapper").appendChild(createSkillFaqDiv);

// TASK-01
/* Change background color h3 of about faq section */
let changeBackgroundColor = document.querySelectorAll("h3").forEach((value) => {
  value.style.backgroundColor = "skyblue";
});

///////////////////////////////////////////////////
let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});
