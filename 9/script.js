let button = document.querySelector('#btn');

let input = document.querySelector('#my-input');

let UlElement = document.querySelector('ul');

button.addEventListener('click', onBtnClick)

function onBtnClick() {
    let newElement = document.createElement('li');
    let text = input.value
    newElement.classList.add('list-item');
    if (!text) {
        button.setAttribute('disabled', disabled);
    }
    newElement.textContent = text;
    input.value = '';
    return addElement(newElement);
}

function addElement(el) {
    return UlElement.append(el);
}