const input = document.querySelector("#font-size-control");
const inputText = document.querySelector("#text");
inputText.style.fontSize = input.value + "px";
input.addEventListener("input", (el) => {
  inputText.style.fontSize = el.currentTarget.value + "px";
});
