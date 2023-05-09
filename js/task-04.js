// element.addEventListener(event, handler, options);
// document.querySelector('button[data-action="save"]');

const incButton = document.querySelector('button[data-action="increment"]');
const decButton = document.querySelector('button[data-action="decrement"]');

let counterValue = 0;

const result = document.querySelector("#value");

incButton.addEventListener("click", () => {
  counterValue++;
  result.textContent = `${counterValue}`;
});

decButton.addEventListener("click", () => {
  counterValue--;
  result.textContent = `${counterValue}`;
});