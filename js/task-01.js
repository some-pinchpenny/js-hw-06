const list = document.querySelectorAll(".item");
console.log("Number of categories: ", list.length);
list.forEach((item) => {
  console.log("Category: ", item.firstElementChild.textContent);
  console.log("Elements: ", item.lastElementChild.children.length);
});
