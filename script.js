//your JS code here. If required.
const colorBoard = document.getElementById("color-board");

for (let i = 0; i < 800; i++) {
  const square = document.createElement("div");
  square.className = "square";
  colorBoard.appendChild(square);
}

const handleMouseEnter = (e) => {
  e.target.style.backgroundColor = "#fff";
};

const handleMouseLeave = (e) => {
  e.target.style.backgroundColor = "#000";
};

for (let i = 0; i < 800; i++) {
  const square = document.getElementsByClassName("square")[i];
  square.addEventListener("mouseenter", handleMouseEnter);
  square.addEventListener("mouseleave", handleMouseLeave);
}
