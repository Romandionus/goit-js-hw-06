// 1. Написать скрипт который посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// 2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// //  пример вывода в консоли ниже
// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


// сonsole.log(document);

// 1. начало 
const liItem = document.querySelectorAll(`.item`);
// console.dir(liItem);
// console.log(liItem);
console.log(`Number of categories:`, liItem.length);
// 1. конец

// 2. начало
// const headerItem = document.querySelector(`.item`);
// const firstItemAnimals = headerItem.firstElementChild.firstChild.data
// console.log(`Category:`, firstItemAnimals);
// const elementsFirstCategory = headerItem.lastElementChild.children.length
// console.log(`Elements:`, elementsFirstCategory);

// const secondItemProducts = headerItem
// console.dir(secondItemProducts);

// // нам нужны не дети, а потомки console.dir(headerItem.children)
// console.dir(headerItem.parentElement) 
// // далее получаем доступ к детям внутри ul
// console.log(headerItem.parentElement.children)

// const childrenUl = headerItem.parentElement.children

// const liElemUl = document.querySelectorAll(`.item h2`);
// console.log(liElemUl[1].nextElementSibling)



// console.log(listHeaders)
// listHeaders.forEach((element) => {
// console.log(element.nextElementSibling.children)
//   console.log(`Category: ${element.textContent}`);
//   // для каждого заголовка ищем соседа (список) и выводим количество его елемеентов
//   console.log(`Elements: ${element.nextElementSibling.children.length}`);
// });
const listHeaders = document.querySelectorAll(".item h2");
listHeaders.forEach(function (element) {
    console.log(element)
    console.log(element.textContent)
    console.log(element.nextElementSibling)
    console.log(element.nextElementSibling.children)
    console.log(`Category: ${element.textContent}`);
    console.log(`Elements: ${element.nextElementSibling.children.length}`);
});

// как работает forEach
// const numbers = [5, 10, 15, 20, 25];

// console.log(numbers)

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });