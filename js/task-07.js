// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет инлайн - стиль span#text обновляя свойство
// font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.



const textSpan = document.querySelector(`#text`)
const input = document.querySelector(`#font-size-control`)
console.log(input)
console.log(textSpan.textContent)

input.addEventListener(`change`, function () {
    textSpan.style.fontSize = input.value + "px";
});