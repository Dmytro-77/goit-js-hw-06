const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
]

const ingredientsList = document.querySelector('#ingredients');

const createli = el => {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.textContent = el;
  ingredientsItem.classList.add('item');
 console.log(ingredientsItem);
 return ingredientsItem;
};

  
const ingredientsItem = ingredients.map(createli);
ingredientsList.append(...ingredientsItem);

console.log(ingredientsItem);
