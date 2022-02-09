// менять цвет body через инлайн тиль по клике на кнопке и выводит значение цвета в span.color.
// вывести в консоль цвет 


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnElem = document.querySelector(`button`)
const body = document.querySelector(`body`)
const span = document.querySelector(`span`)

const wtf = btnElem.addEventListener(`click`, changeColor);

function changeColor() {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  console.log(newColor)
  span.textContent = newColor
}



