const textInput = document.querySelector("#name-input");
const inputName = document.querySelector("#name-output");

// textInput.value = "";

textInput.addEventListener("input", (name) => {
  inputName.textContent = !name.currentTarget.value.trim()
    ? "Anonymous"
    : name.currentTarget.value;
});
