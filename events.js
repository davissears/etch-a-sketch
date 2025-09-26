//* modals
//* 1. get reference
const detail = document.getElementById("detailButton");
const closeModalButton = document.getElementById("modalClose");
const openModal = document.getElementById("detail-modal");

// grid container
const parentContainer = document.getElementById("parent-Container");

// values for handling detail input
const inputValue = document.getElementById("detailValue");
let size = inputValue.value;

// buttons
const randomColor = document.getElementById("random-Color-Button");
const opacityModeButton = document.getElementById("opacity-Mode");

let colorMode; // determines if the color is random or black

//random rgb value declarations
function getRandomColor() {
  const min = 0;
  const max = 255;
  let rColor = Math.random() * (max - min) + min;
  let gColor = Math.random() * (max - min) + min;
  let bColor = Math.random() * (max - min) + min;
  return `rgb(${rColor}, ${gColor}, ${bColor})`;
}

//* populates children in container
function populateGrid(size) {
  parentContainer.innerHTML = ""; // removes all children from container
  const resolution = size * size;
  const isOpacityMode = opacityModeButton.checked; // Check if opacity mode is on

  for (let i = 0; i < resolution; i++) {
    const childDiv = document.createElement("div");
    childDiv.setAttribute(
      "style",
      "flex: 0 0 calc(100% / " + size + "); height:  calc(100% / " + size + ");"
    );
    parentContainer.appendChild(childDiv);
    childDiv.className = "children";
    childDiv.id = `child-div-${i + 1}`;

    if (isOpacityMode) {
      childDiv.style.backgroundColor = "black"; // Start with a black background
      childDiv.style.opacity = 0; // Start with 0 opacity
      childDiv.addEventListener("mouseover", () => {
        let currentOpacity = parseFloat(childDiv.style.opacity);
        if (currentOpacity < 1) {
          childDiv.style.opacity = currentOpacity + 0.1;
        }
      });
    } else {
      childDiv.addEventListener("mouseover", (e) => {
        if (colorMode === "random") {
          e.target.style.backgroundColor = getRandomColor();
        } else {
          e.target.style.backgroundColor = "black";
        }
      });
    }
  }
}

//* Listeners
// random color mode
randomColor.addEventListener("click", () => {
  colorMode = "random";
  openModal.classList.remove("modalContainerOpen");
  populateGrid(inputValue.value);
  // add Monocolor button
  randomColor.style.display = "none";
  addMonoButton = document.createElement("button");
  addMonoButton.setAttribute("id", "mono-Button");
  openModal.appendChild(addMonoButton);
  monoButton = document.getElementById("mono-Button");
  monoButton.textContent = "Monocolor";
});
//
detail.addEventListener("click", () => {
  openModal.classList.add("modalContainerOpen");
});

closeModalButton.addEventListener("click", () => {
  openModal.classList.remove("modalContainerOpen");
  // Reset to default color mode when closing, unless you want it to persist
  colorMode = undefined;
  populateGrid(inputValue.value);
});

// Initial grid population
populateGrid(size);
