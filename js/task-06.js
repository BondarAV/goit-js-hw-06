const input = document.querySelector("input#validation-input");

input.addEventListener("blur", event => {
  if (event.currentTarget.value.length === Number(event.currentTarget.getAttribute("data-length"))) {
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.add("valid");
  } else {
    event.currentTarget.classList.remove("valid");
    event.currentTarget.classList.add("invalid");
  }
});