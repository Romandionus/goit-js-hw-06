// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;
const value = document.querySelector(`#value`);

const clickPlusOne = () => {
    value.textContent = counterValue += 1;
}

const clickMinesOne = () => {
    value.textContent = counterValue -= 1;
}

const buttonMines = document.querySelector(`button[data-action="decrement"]`);
const buttonPlus = document.querySelector(`button[data-action="increment"]`);

buttonMines.addEventListener(`click`, clickMinesOne);
buttonPlus.addEventListener(`click`, clickPlusOne);




