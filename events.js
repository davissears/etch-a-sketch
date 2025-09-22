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

//* populate Children

//*for loop parameters
for (let i = 0; i < 256; i++) {
  var childDiv = document.createElement("div");
  //appends to container
  parentContainer.appendChild(childDiv);
  // className for CSS Styling
  childDiv.className = "children";
  // creates unique ID's for each childDiv
  childDiv.id = `child-div-${i + 1}`;
  //listens for mouseover event
  childDiv.addEventListener("mouseover", (e) => {
    //changes backgroundColor on mouseover
    e.target.style.backgroundColor = "black";
  });
}
