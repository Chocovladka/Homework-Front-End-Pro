let button = document.querySelector('#btn');

let input = document.querySelector('#my-input');

let ulElement = document.querySelector('ul');

button.addEventListener('click', onBtnClick)

// function onBtnClick() {
//     let newElement = document.createElement('li');
//     let text = input.value
//     newElement.classList.add('list-item');
//     if (!text) {
//         button.setAttribute('disabled', disabled);
//     }
//     newElement.textContent = text;
//     input.value = '';
//     return addTask(newElement);
// }

// function addElement(el) {
//     return ulElement.append(el);
// }

function onBtnClick() {
    if (!input.value) {
        button.setAttribute('disabled', disabled);
    }
    addTask(input.value);
    clearInput();
}

function addTask(text) {
    let newElement = document.createElement('li');
    newElement.classList.add('list-item');
    newElement.textContent = text;
    ulElement.append(newElement);
}

function clearInput() {
    input.value = '';
}