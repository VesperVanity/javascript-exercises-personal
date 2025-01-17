
const mainHeader = document.querySelector(".main-header");

const redText = document.createElement("p");
const blueHeader = document.createElement("h3");
const container = document.createElement("div");

const containerHeader = document.createElement("h1");
const containerText = document.createElement("p");
container.append(containerHeader, containerText);

redText.textContent = "Hey I'm red!";
redText.style.color = "red";

blueHeader.textContent = "I'm a blue h3!";
blueHeader.style.color = "blue";

container.style.border = "thick solid black";
container.style.backgroundColor = "pink";

containerHeader.textContent = "I'm in a div!";
containerText.textContent = "ME TOO!";

mainHeader.appendChild(redText);
mainHeader.appendChild(blueHeader);
mainHeader.appendChild(container);

