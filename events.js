//* grid container
const parentContainer = document.getElementById("parent-Container");
//* values for handling 'detail' input
const inputValue = document.getElementById("detailValue"); // gets detail <input>
let size = inputValue.value; // references detail <input> value

//* populates children in container
function populateGrid(size) {
  //accepts value of detail <input> as a parameter
  parentContainer.innerHTML = ""; // removes children in container
  const resolution = size * size; // declares variable for number of child elements
  //loops until number of children is met
  for (let i = 0; i < resolution; i++) {
    // creates 1 child for each loop iteration
    const childDiv = document.createElement("div");
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
    //listens for mouseover event
    childDiv.addEventListener("mouseover", (e) => {
      //changes backgroundColor on mouseover
      e.target.style.backgroundColor = "black";
    });
  }
}
//function call
populateGrid(size);
//*for loop parameters

//* Components

//* modals
//* 1. get reference
//open detail modal button reference
const detail = document.getElementById("detailButton");
//close detail modal button reference
const closeModalButton = document.getElementById("modalClose");
// .modalContainer reference
openModal = document.getElementById("detail-modal");

//2. open modalContainer
detail.addEventListener("click", () => {
  // add modalContainerOpen class
  openModal.classList.add("modalContainerOpen");
});
//closes ModalContainer
closeModalButton.addEventListener("click", () => {
  //removes class making modal visible
  openModal.classList.remove("modalContainerOpen");
  //calls function that removes old container children and adds new children
  populateGrid(inputValue.value); // populate function w/ new detail InputValue
});
