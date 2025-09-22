//* container
//* 1. create Element
const container = document.createElement("div");
//* Container Class & ID
container.setAttribute("class", "divContainer");
container.setAttribute("id", "parentContainer");
//* 2. append
document.body.appendChild(container);
//* 3. get reference
const parentContainer = document.getElementById("parentContainer");
