const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

btnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  btnDecrement.nextElementSibling.textContent = counterValue;
  //   console.log((btnDecrement.nextElementSibling.textContent = counterValue));
});

btnIncrement.addEventListener("click", () => {
  counterValue += 1;
  btnIncrement.previousElementSibling.textContent = counterValue;

  //   console.log((btnIncrement.previousElementSibling.textContent = counterValue));
});
