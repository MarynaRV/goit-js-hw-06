const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listItems = [];

ingredients.forEach(ingredient => {
  const listItem = document.createElement("li");
  listItem.innerText = ingredient;
  listItem.classList.add("item");
  listItems.push(listItem);
});
document.querySelector('#ingredients').append(...listItems);