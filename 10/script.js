const DELETE_BTN_CLASS = 'delete-btn';
const ADD_BTN_CLASS = 'add-btn';

let tBody = document.querySelector('#t-body');

let contactTemplate = document.querySelector('#contact-template').innerHTML;

let nameInput = document.querySelector('#name-input');

let surnameInput = document.querySelector('#surname-input');

let phoneInput = document.querySelector('#phone-input');

let actionInput = document.querySelector('#action-input');

let inputs = document.querySelectorAll('.input');

container.addEventListener('click', onBtnClick)

function onBtnClick(e) {
    if (e.target.classList.contains(DELETE_BTN_CLASS))  {
        onDeleteBtnClick(e);
    } else if (e.target.classList.contains(ADD_BTN_CLASS)) {
        onAddBtnClick(e);
    }
}

function onDeleteBtnClick(e) {
    e.target.closest('tr').remove();
}

function onAddBtnClick(e) {
    e.preventDefault();

    isInputValid();
    let newContact = getInfo();
    addInfo(newContact);
    clearInput();
}

function isInputValid(){
    if ((!nameInput.value) ||
            (!surnameInput.value) ||
            (!phoneInput.value) ||
            (!actionInput.value)) {
            button.setAttribute('disabled', disabled);
        }
}

function getInfo() {
    let contact = {};
    inputs.forEach((inp) => {
        contact[inp.name] = inp.value;
    });
    return contact;
}

function createContactHtml(contact) {
    return contactTemplate
        .replace('{{name}}', contact.name)
        .replace('{{surname}}', contact.surname)
        .replace('{{phone}}', contact.phone)
        .replace('{{action}}', contact.action);
}

function addInfo(contact) {
    let newContactHtml = createContactHtml(contact);
    tBody.insertAdjacentHTML('beforeend', newContactHtml);
}

function clearInput() {
    for (let i = 0; i < inputs.length; i++){
        inputs[i].value = '';
    }
}