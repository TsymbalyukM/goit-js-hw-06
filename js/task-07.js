const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

spanEl.style.fontSize = inputEl.value + "px";

const inputResizing = () => {
  spanEl.style.fontSize = `${inputEl.value}px`;
};
inputEl.addEventListener("input", inputResizing);
