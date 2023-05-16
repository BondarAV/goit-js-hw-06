function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorChangeBtn = document.querySelector("button.change-color");
const body = document.querySelector("body");
const colorOutput = document.querySelector("span.color");

colorChangeBtn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();

  body.style.backgroundColor = randomColor;
  colorOutput.textContent = randomColor;
});