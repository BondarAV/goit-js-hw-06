const nameInput = document.querySelector("input#name-input");
const nameOutput = document.querySelector("span#name-output");

nameInput.addEventListener("input", (event) => {
  if (Boolean(event.currentTarget.value.trim())) {
    nameOutput.textContent = nameInput.value;
  } else {
    nameOutput.textContent = "Anonymus";
  }
});