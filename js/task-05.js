// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".


// const input = document.querySelector(`#name-input`);
// const nameSpan = document.querySelector(`#name-output`)


const refs = {
    input: document.querySelector(`#name-input`),
    output: document.querySelector(`#name-output`)
}

console.log(refs.input)
console.log(refs.output.textContent)

refs.input.addEventListener(`focus`, onInputFocus)
refs.input.addEventListener(`blur`, onInputBlur)
refs.input.addEventListener(`input`, onInputChange)

function onInputFocus() {
    console.log(`unit ready`)
}

function onInputBlur() {
    console.log(`unit lost`)
}

function onInputChange(event) {
    console.log(`unit promoted`, event.currentTarget.value)
    refs.output.textContent = event.currentTarget.value
    console.log(refs.output)
}