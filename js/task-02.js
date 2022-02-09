// Напиши скрипт, который для каждого элемента массива ingredients:
// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const addLiInUl = document.querySelector(`#ingredients`)
const liElement = ingredients.map((element) => {
  const newLiElem = document.createElement(`li`);
  newLiElem.textContent = element;
  newLiElem.classList.add(`item`)
  return newLiElem
  });

addLiInUl.append(...liElement);