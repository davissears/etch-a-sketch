//* modals
//* 1. get reference
//open detail modal button reference
const detail = document.getElementById("detailButton");
//close detail modal button reference
const closeModalButton = document.getElementById("modalClose");
// .modalContainer reference
openModal = document.getElementById("detail-modal");
//* grid container
const parentContainer = document.getElementById("parent-Container");
//* values for handling 'detail' input
const inputValue = document.getElementById("detailValue"); // gets detail <input>
let size = inputValue.value; // references detail <input> value
const childDiv = document.createElement("div");

const randomColor = document.getElementById("random-Color-Button");
const childs = document.getElementsByClassName("children");
// *listens for mouseover event
// randomColor.addEventListener("click", () => {
//random rgb value declarations
function gay() {
  const min = 0;
  const max = 255;
  let rColor = Math.random() * (max - min) + min;
  let gColor = Math.random() * (max - min) + min;
  let bColor = Math.random() * (max - min) + min;
  let RGBValue = `rgb(${rColor}, ${gColor}, ${bColor})`;
  return RGBValue;
}

let sameGender;
let defaultColor = "black";
let sketchColor = defaultColor;
// randomColor.onclick = () => {
//   sameGender = "cute";
// };

//* populates children in container
function populateGrid(size) {
  //accepts value of detail <input> as a parameter
  parentContainer.innerHTML = ""; // removes children in container
  const resolution = size * size; // declares variable for number of child elements
  //loops until number of children is met

  for (let i = 0; i < resolution; i++) {
    const childDiv = document.createElement("div");
    // creates 1 child for each loop iteration
    // sets attributes for each childDiv
    childDiv.setAttribute(
      "style",
      //flex-basis formula
      "flex: 0 0 calc(100% / " + size + "); height:  calc(100% / " + size + ");"
    );
    //appends to container
    parentContainer.appendChild(childDiv);
    // className for CSS Styling
    childDiv.className = "children";
    // creates unique ID's for each childDiv
    childDiv.id = `child-div-${i + 1}`;
    function sketch(sameGender) {
      childDiv.addEventListener("mouseover", (e) => {
        if (sameGender === "cute") {
          e.target.style.backgroundColor = gay();
        } else {
          e.target.style.backgroundColor = "black";
        }
      });
    }
    // function makeItSlay(sameGender) {
    //   if (sameGender === "cute") {
    //     defaultColor = gay();
    //   } else {
    //     return;
    //   }
    // }
    sketch(sameGender);
  }
}

//

randomColor.addEventListener("click", () => {
  sameGender = "cute";
  openModal.classList.remove("modalContainerOpen");
  populateGrid(inputValue.value);
});

detail.addEventListener("click", () => {
  // add modalContainerOpen class
  openModal.classList.add("modalContainerOpen");
});
//closes ModalContainer
closeModalButton.addEventListener("click", () => {
  //removes class making modal visible
  openModal.classList.remove("modalContainerOpen");
  populateGrid(inputValue.value); // populate function w/ new detail InputValue
});
populateGrid(size);
