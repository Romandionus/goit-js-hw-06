// 1. Обработка отправки формы form.login-form должна быть по событию submit.
// 2. При отправке формы страница не должна перезагружаться.
// 3. Если в форме есть незаполненные поля, 
// выводи alert с предупреждением о том, что все поля должны быть заполнены.
// 4. Если пользователь заполнил все поля и отправил форму,
// собери значения полей в обьект, где имя поля будет именем свойства,
// а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// 5. Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.


const form = document.querySelector(`form`)
console.log(form)

form.addEventListener(`submit`, onFormSubmit)
const button = document.querySelector(`button`)
console.dir(button)
const input = document.querySelector(`input`)
console.dir(input)

function onFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    console.log(formData)
    formData.forEach((value, name) => {
        console.log(`значение свойства`, value)
        console.log(`имя поля`, name)
        alert(`Поля не должны быть пустыми!`)
    })
    
// const formElements = event.currentTarget.elements;
// console.dir(formElements)

//     const mail = formElements.email.value;
//     const passord = formElements.password.value;
//     console.log(mail)
//     console.log(passord)
}

