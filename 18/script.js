const DELETE_BTN_CLASS = 'delete-btn';
const ADD_BTN_CLASS = 'add-btn';
const CONTACTS_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/contacts/';
const ContactsSource = new Http(CONTACTS_URL);

let tBody = document.querySelector('#t-body');
let contactTemplate = document.querySelector('#contact-template').innerHTML;

let nameInput = document.querySelector('#name-input');
let surnameInput = document.querySelector('#surname-input');
let phoneInput = document.querySelector('#phone-input');
let inputs = document.querySelectorAll('.input');

let contactLine = document.querySelector('.line');
let contactsList = [];

container.addEventListener('click', onContainerClick);

init();

function init() {
    ContactsSource.get()
    .then(setContacts)
    .then(renderContacts);
}

function setContacts(list) {
    return contactsList = list;
}

function renderContacts(list) {
    let html = list.map(createContactHtml).join('');
    tBody.innerHTML = html;
}

function onContainerClick(e) {
    e.preventDefault();
    let contactLine = getLine(e);
    
    switch(true){
    case e.target.classList.contains(DELETE_BTN_CLASS) :
        return deleteContact(+contactLine.dataset.id);
    case e.target.classList.contains(ADD_BTN_CLASS) :
        return addContact();
    }
}

function getLine(e) {
    return e.target.closest('tr');
}

function deleteContact(contactId) {
    contactsList.filter(contact => contact.id !== contactId);
    ContactsSource.delete(contactId);
    el = findElById(contactId);
    el && el.remove();
}

function findElById(id) {
    return tBody.querySelector(`[data-id="${id}"]`);
}

function addContact() {

    if (isInputValid()){
        let newContact = getInfo();
        addInfo(newContact);
        clearInput();
    }
}

function isInputValid(){
    return nameInput.value &&
        surnameInput.value &&
        phoneInput.value 
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
        .replace('{{id}}', contact.id)
        .replace('{{name}}', contact.name)
        .replace('{{surname}}', contact.surname)
        .replace('{{phone}}', contact.phone);
}

function addInfo(contact) {
    ContactsSource.create(contact).then((data) => {
        contactsList.push(data);
        let newContactHtml = createContactHtml(data);
        tBody.insertAdjacentHTML('beforeend', newContactHtml);
    });
    
}

function clearInput() {
    for (let i = 0; i < inputs.length; i++){
        inputs[i].value = '';
    }
}