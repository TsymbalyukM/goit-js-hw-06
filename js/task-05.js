const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const handleClick = () => {
  if (nameInput.value.trim() === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = nameInput.value;
  }
};
nameInput.addEventListener("input", handleClick);
