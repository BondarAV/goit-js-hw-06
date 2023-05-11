const fontSizeInput = document.querySelector("input#font-size-control");
const text = document.querySelector("span#text");

fontSizeInput.addEventListener("input", event => {
  text.style.fontSize = `${event.currentTarget.value}px`;
});