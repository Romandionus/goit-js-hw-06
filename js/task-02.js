const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.



// console.log(newLiElem)
// newLiElem.textContent = `${ingredients}`
// newLiElem.className = `item`

const addLiInUl = document.querySelector(`#ingredients`)
ingredients.forEach(ingredients => {
  const newLiElem = document.createElement(`li`);
  // console.log(newLiElem)
newLiElem.textContent = `${ingredients}`
  newLiElem.className = `item`

  addLiInUl.append(newLiElem);
  console.log(addLiInUl)
});

