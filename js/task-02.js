const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const makeItemListEl = ingredients.map(ingredient => {
  const itemList = document.createElement('li');
  itemList.classList.add('item');
  itemList.textContent = ingredient;
  return itemList;
});

ingredientsList.append(...makeItemListEl);
