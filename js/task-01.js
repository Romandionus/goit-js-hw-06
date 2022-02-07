// 1. Написать скрипт который посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// 2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

const liItem = document.querySelectorAll(`.item`);
console.log(`Number of categories:`, liItem.length);

const listHeaders = document.querySelectorAll(".item h2");
listHeaders.forEach(function (element) {
    console.log(element)
    console.log(element.textContent)
    console.log(element.nextElementSibling)
    console.log(element.nextElementSibling.children)
    console.log(`Category: ${element.textContent}`);
    console.log(`Elements: ${element.nextElementSibling.children.length}`);
});

