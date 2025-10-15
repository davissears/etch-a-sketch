// events.js
var detail = document.getElementById("detailButton");
var closeModalButton = document.getElementById("modalClose");
var openModal = document.getElementById("detail-modal");
var parentContainer = document.getElementById("parent-Container");
var inputValue = document.getElementById("detailValue");
var size = inputValue.value;
var randomColor = document.getElementById("random-Color-Button");
var opacityModeButton = document.getElementById("opacity-Mode");
var colorMode;
var monoButton;
function getRandomColor() {
	const min = 0;
	const max = 255;
	const rColor = Math.random() * (max - min) + min;
	const gColor = Math.random() * (max - min) + min;
	const bColor = Math.random() * (max - min) + min;
	return `rgb(${rColor}, ${gColor}, ${bColor})`;
}
function populateGrid(size2) {
	parentContainer.innerHTML = "";
	const resolution = size2 * size2;
	const isOpacityMode = opacityModeButton.checked;
	for (let i = 0; i < resolution; i++) {
		const childDiv = document.createElement("div");
		childDiv.setAttribute(
			"style",
			"flex: 0 0 calc(100% / " +
				size2 +
				"); height:  calc(100% / " +
				size2 +
				");",
		);
		parentContainer.appendChild(childDiv);
		childDiv.className = "children";
		childDiv.id = `child-div-${i + 1}`;
		if (isOpacityMode) {
			childDiv.style.backgroundColor = "black";
			childDiv.style.opacity = 0;
			childDiv.addEventListener("mouseover", () => {
				const currentOpacity = parseFloat(childDiv.style.opacity);
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
randomColor.addEventListener("click", () => {
	colorMode = "random";
	randomColor.style.display = "none";
	populateGrid(inputValue.value);
	addMonoButton = document.createElement("button");
	addMonoButton.setAttribute("id", "mono-Button");
	openModal.appendChild(addMonoButton);
	addMonoButton.textContent = "Monocolor";
	addMonoButton.className = "modalButton";
	addMonoButton.addEventListener("click", () => {
		monoButton = document.getElementById("mono-Button");
		colorMode = undefined;
		populateGrid(inputValue.value);
		monoButton.style.display = "none";
		randomColor.style.display = "inline-block";
	});
});
detail.addEventListener("click", () => {
	openModal.classList.add("modalContainerOpen");
});
closeModalButton.addEventListener("click", () => {
	openModal.classList.remove("modalContainerOpen");
	populateGrid(inputValue.value);
});
populateGrid(size);
