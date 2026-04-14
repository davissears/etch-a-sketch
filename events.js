//* modals
//* 1. get reference
const detail = document.getElementById("detailButton");
const closeModalButton = document.getElementById("modalClose");
const openModal = document.getElementById("detail-modal");

// grid container
const parentContainer = document.getElementById("parent-Container");

// values for handling detail input
const inputValue = document.getElementById("detailValue");
const size = inputValue.value;

// buttons
const randomColor = document.getElementById("random-Color-Button");
const opacityModeButton = document.getElementById("opacity-Mode");

let colorMode;

//random rgb value declarations
function getRandomColor() {
	const min = 0;
	const max = 255;
	const rColor = Math.random() * (max - min) + min;
	const gColor = Math.random() * (max - min) + min;
	const bColor = Math.random() * (max - min) + min;
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
			"flex: 0 0 calc(100% / " +
				size +
				"); height:  calc(100% / " +
				size +
				");",
		);
		parentContainer.appendChild(childDiv);
		childDiv.className = "children";
		childDiv.id = `child-div-${i + 1}`;

		if (isOpacityMode) {
			childDiv.style.backgroundColor = "black"; // Start with a black background
			childDiv.style.opacity = 0; // Start with 0 opacity
		}
	}
}

// Single delegated listener on the container — no per-cell listeners to leak
parentContainer.addEventListener("mouseover", (e) => {
	const target = e.target;
	if (!target.classList.contains("children")) return;

	if (opacityModeButton.checked) {
		const currentOpacity = parseFloat(target.style.opacity);
		if (currentOpacity < 1) {
			target.style.opacity = currentOpacity + 0.1;
		}
	} else {
		if (colorMode === "random") {
			target.style.backgroundColor = getRandomColor();
		} else {
			target.style.backgroundColor = "black";
		}
	}
});

// Create mono button once; toggle visibility instead of recreating it on every click
const addMonoButton = document.createElement("button");
addMonoButton.setAttribute("id", "mono-Button");
addMonoButton.textContent = "Monocolor";
addMonoButton.className = "modalButton";
addMonoButton.style.display = "none";
openModal.appendChild(addMonoButton);
addMonoButton.addEventListener("click", () => {
	colorMode = undefined; // reset to default black mode
	populateGrid(inputValue.value);
	addMonoButton.style.display = "none";
	randomColor.style.display = "inline-block";
});

//* Listeners
// random color mode
randomColor.addEventListener("click", () => {
	colorMode = "random";
	randomColor.style.display = "none";
	addMonoButton.style.display = "inline-block";
	populateGrid(inputValue.value);
});

// Detail button click event
detail.addEventListener("click", () => {
	openModal.classList.add("modalContainerOpen");
});

closeModalButton.addEventListener("click", () => {
	openModal.classList.remove("modalContainerOpen");
	populateGrid(inputValue.value);
});

// Initial grid population
populateGrid(size);
