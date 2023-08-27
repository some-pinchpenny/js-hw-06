function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const generalBox = document.querySelector("#boxes");

let height = 20;
let width = 20;

function createBoxes(amount) {
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const objStyle = {
      height: (height += 10),
      width: (width += 10),
      backgroundColor: getRandomHexColor(),
    };

    boxes.push(objStyle);
    console.log(boxes);
  }
  const elements = boxes
    .map(({ height, width, backgroundColor }) => {
      return `
    <div style='height:${height}px; width:${width}px; background-color:${backgroundColor};'></div>`;
    })
    .join("");
  return elements;
}

function destroyBoxes() {
  generalBox.innerHTML = "";
}

btnCreate.addEventListener("click", () => {
  const elements = createBoxes(btnCreate.previousElementSibling.value);
  generalBox.insertAdjacentHTML("beforeend", elements);
});

btnDestroy.addEventListener("click", () => {
  btnCreate.previousElementSibling.value = "";
  height = 20;
  width = 20;
  destroyBoxes();
});
