const colorBoard = document.getElementById("color-board");

for (let i = 0; i < 800; i++) {
  const square = document.createElement("div");
  square.className = "square";
  colorBoard.appendChild(square);
}

for (let i = 0; i < 800; i++) {
  const square = document.getElementsByClassName("square")[i];
  square.addEventListener("mouseenter", () => {
    square.style.backgroundColor = "#fff";
  });
  square.addEventListener("mouseleave", () => {
    square.style.backgroundColor = "#000";
  });
}
