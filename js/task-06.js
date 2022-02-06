// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
// проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
// Если введено подходящее количество символов, то border инпута становится зелёным,
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid,
// которые мы уже добавили в исходные файлы задания.


// function onInputFocus(event) {
//     console.log(`фокус появился`)
//     const input = event.currentTarget;
//     input.classList.add(`valid`)
// }

// function onInputBlur(event) {
//     console.log(`фокус пропал`)
//     const input = event.currentTarget;
//     input.classList.add(`invalid`)
// }

// function onInputChange(event) {
//     const input = event.currentTarget;
//     if (refs.input.textContent.data === 6) {
//         input.classList.add(`valid`)
//     }
//     else {
//         input.classList.add(`invalid`)
//     }
// }

const inputEl = document.querySelector('input');
inputEl.addEventListener('blur', event => {
  if (event.currentTarget.value.length >= inputEl.dataset.length) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
});