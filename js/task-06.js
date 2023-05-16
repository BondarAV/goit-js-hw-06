const input = document.querySelector("input#validation-input");

function replaceClass (element, oldClass, newClass) {
  element.classList.remove(oldClass);
  element.classList.add(newClass);
}

input.addEventListener("blur", event => {
  if (event.currentTarget.value.length === Number(event.currentTarget.getAttribute("data-length"))) {
    replaceClass(event.currentTarget, "invalid", "valid");
  } else {
    replaceClass(event.currentTarget, "valid", "invalid");
  }
});