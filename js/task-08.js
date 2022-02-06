// 1. Обработка отправки формы form.login-form должна быть по событию submit.
// 2. При отправке формы страница не должна перезагружаться.
// 3. Если в форме есть незаполненные поля, 
// выводи alert с предупреждением о том, что все поля должны быть заполнены.
// 4. Если пользователь заполнил все поля и отправил форму,
// собери значения полей в обьект, где имя поля будет именем свойства,
// а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// 5. Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.


// const form = document.querySelector(`form`)
// console.log(form)

// form.addEventListener(`submit`, onFormSubmit)
// const button = document.querySelector(`button`)
// console.dir(button)
// const input = document.querySelector(`input`)
// console.dir(input)

// function alert() {
//     if (email <= 0) {
//         alert(`Все поля должны быть заполнены!`)
//     }
//     else {
//         return
// }
// }

// function onFormSubmit(event) {
//     event.preventDefault();
//     const formData = new FormData(event.currentTarget)
//     console.log(formData)

//     // alert(`Все поля должны быть заполнены!`)


//     formData.forEach((value, name) => {
//         console.log(`значение свойства`, value)
//         console.log(`имя поля`, name)
        
//     })
// }

// const formRef = document.querySelector('form.login-form')
// formRef.addEventListener('submit', onFormSubmit);
// function onFormSubmit(event) {
//   event.preventDefault();
//   const formElements = event.currentTarget.elements;
//   const email = formElements.email.value;
//   const password = formElements.password.value;
//   const formData = { email, password };
//   if (email && password) {
//     console.log(formData)
//       } else {
//       alert('Please complete all fields')
//   }
// }
  

const form = document.querySelector(`form`);
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
    // const email = form.email.value;
    // const password = form.password.value;
  if (email.value === "" || password.value === "") {
    return alert("Все поля должны быть заполнены!");
  }
console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
