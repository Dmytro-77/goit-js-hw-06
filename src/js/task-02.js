const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
]

const ingredientsList = document.querySelector('#ingredients');

const createli = el => {
 const ingredientsItem = document.createElement('li');
 ingredientsItem.textContent = el;
 ingredientsItem.classList.add('item');
 
 console.log(ingredientsItem);
 return ingredientsItem;
};
const cat = ingredients.map((ingredient) => createli(ingredient));

console.log(cat);