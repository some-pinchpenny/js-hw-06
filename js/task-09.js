function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector(".widget");
const colorName = document.querySelector(".color");

colorName.textContent = "#ffffff";

widget.lastElementChild.addEventListener("click", () => {
  widget.parentNode.style.backgroundColor = getRandomHexColor();
  colorName.textContent = getRandomHexColor();
});
