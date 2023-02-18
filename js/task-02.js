const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const setIngredientsEl = document.querySelector('#ingredients');
const EachIngredientsEl = [];


ingredients.forEach (element => {
  const newCreateEl = document.createElement("li");

    newCreateEl.textContent = element;
    newCreateEl.classList.add('item');
    EachIngredientsEl.push(newCreateEl);
});

setIngredientsEl.append(...EachIngredientsEl);

// console.log(setIngredientsEl);
