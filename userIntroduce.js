const userIntroduce = document.getElementById("userIntroduce");

const profile = document.createElement("img");

// 연락처
const addressUl = document.createElement("ul");

const mail = document.createElement("li");
mail.textContent = "jjh099@icloud.com";

const github = document.createElement("li");
const githubLink = document.createElement("a");
github.appendChild(githubLink);
githubLink.textContent = "My GitHub";
githubLink.href = "https://github.com/Jinga02";

const velog = document.createElement("li");
const velogLink = document.createElement("a");
velog.appendChild(velogLink);
velogLink.textContent = "My Velog";
velogLink.href = "https://velog.io/@jjh099";

addressUl.appendChild(mail);
addressUl.appendChild(github);
addressUl.appendChild(velog);

// 소개글
const introduce = document.createElement("p");
introduce.textContent =
  "Frontend 개발을 심도 있게 탐구하고자 노력하는 주니어 개발자입니다. 새로운 도전을 두려워하지 않고, 다양한 언어와 스킬을 열심히 익히며 실력을 키우는 데 집중하고 있습니다. 관성적인 코드를 피하며, 새로운 기술에 대한 탐구와 팀원들과의 지속적인 협업을 통해, 주니어로서의 성장을 끊임없이 추구하고 있습니다.";

userIntroduce.appendChild(profile);
userIntroduce.appendChild(addressUl);
userIntroduce.appendChild(introduce);
