const container = document.querySelector(".container");
const resizeButton = document.querySelector(".resize-button");

container.addEventListener("mouseover", (e) => {
  if (!e.target.classList.contains("square")) return;
  e.target.classList.add("is-colored");
});

function createGrid(size) {
  const squareSize = 960 / size;
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    container.appendChild(square);
  }
}

createGrid(16);

function resizeGrid() {
  const size = Number(prompt("Squares per side (1-100):"));
  if (!Number.isInteger(size) || size < 1 || size > 100) return;
  container.textContent = "";
  createGrid(size);
}

resizeButton.addEventListener("click", resizeGrid);
