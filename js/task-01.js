const allCategories = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${allCategories.length}`);

allCategories.forEach(el => {
  console.log(
    `Category: ${el.firstElementChild.textContent}\nElements: ${el.lastElementChild.children.length} \n`,
  );
});
