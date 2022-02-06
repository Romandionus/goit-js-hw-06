// менять цвет body через инлайн тиль по клике на кнопке
// вывести в консоль цвет 


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnElem = document.querySelector(`button`)
const body = document.querySelector(`body`)
console.dir(body.style.backgroundColor)


const clickToChange = (event) => {
  console.log(`нажми чтобы сделать магию`, event)
  console.log(`type`, event.type)
  console.log(`target`, event.currentTarger)
  console.log(`не меняет цвет`)
}
const wtf = btnElem.addEventListener(`click`, clickToChange);


// if (wtf !== true) {
// body.style.backgroundColor(grey)
// } else {
//   console.log(`не работает`)
// }
