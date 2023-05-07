const list = document.querySelector("#categories");
const arrayOfCategories = list.querySelectorAll(".item");
const numberOfCategories = arrayOfCategories.length;

console.log(`Number of categories: ${numberOfCategories}`);

const arrayOfCategoryNames = list.querySelectorAll(".item h2");

arrayOfCategories.forEach(element => {
  console.log(`Category: ${element.querySelector("h2").textContent}`);
  console.log(`Elements: ${element.querySelectorAll("li").length}`);
});