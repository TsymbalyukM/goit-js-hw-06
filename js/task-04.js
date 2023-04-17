const counterValue = document.querySelector("#value");

const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

const decrement = () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
};

const increment = () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
};

decrementButton.addEventListener("click", decrement);
incrementButton.addEventListener("click", increment);
