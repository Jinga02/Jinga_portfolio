const userInformations = document.getElementById("userInformations");

const title = document.createElement("h1");
title.textContent = "My Skils";

userInformations.appendChild(title);

const skills = document.createElement("ul");

const mySkills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Vue",
  "Redux",
  "Recoil",
  "Python",
  "Django",
];

for (const skill of mySkills) {
  const skillItem = document.createElement("li");
  skillItem.textContent = skill;
  skills.appendChild(skillItem);
}

userInformations.appendChild(skills);
