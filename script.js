const container = document.querySelector(".container");

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
