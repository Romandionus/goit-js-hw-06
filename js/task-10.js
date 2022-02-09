function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('#controls > input');
const boxesRef = document.querySelector('div#boxes');
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');

createBtnRef.addEventListener('click', () => {
    createBoxes(inputRef.value);
});

destroyBtnRef.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    let string = '';
    for (let i = 0; i < amount; i++) {
        string += createBox(i);
    }
    boxesRef.innerHTML = string;
}

function createBox(ratio) {
    return `<div style="background-color: ${getRandomHexColor()}; height: ${30 + 10 * ratio
        }px; width: ${30 + 10 * ratio}px"></div>`;
}

function destroyBoxes() {
    boxesRef.innerHTML = '';
    inputRef.value = '';
}