const DELETE_BTN_SELECTOR = '.delete-btn';
const EDIT_BTN_SELECTOR = '.edit-btn';
const CONTACTS_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/contacts/';
const ContactsSource = new Http(CONTACTS_URL);

let $addBtn = $('#add-btn');
let $tBody = $('#t-body');
let contactTemplate = document.querySelector('#contact-template').innerHTML;

let $idInput = $('#id-input');
let $nameInput = $('#name-input');
let $surnameInput = $('#surname-input');
let $phoneInput = $('#phone-input');
let $inputs = $('.input');
let $container = $('#container');

// let contactLine = document.querySelector('.line');
// container.addEventListener('click', onContainerClick);
let contactsList = [];

let $editForm = $('#edit-form').dialog({
    autoOpen: false,
    modal: true,
    buttons: {
        Save: () => {
            saveContact()
            closeModal()
        },
        Cancel: closeModal
    },
    show: {
        effect: "blind",
        duration: 1000
      },
    hide: {
        effect: "explode",
        duration: 1000
    },
    close: resetForm
})

$container.on('click', DELETE_BTN_SELECTOR, onDeleteBtClick);
$container.on('click', EDIT_BTN_SELECTOR, onEditBtnClick);
$addBtn.on('click', onAddBtnClick);

init();

function init() {
    ContactsSource.get()
    .then(setContacts)
    .then(renderContacts);
}

function onDeleteBtClick(e) {
    e.preventDefault();
    return deleteContact(getElementId(e.target));
}

function onEditBtnClick(e) {
    e.preventDefault();
    return editContact(getElementId(e.target)); 
}

function onAddBtnClick() {
    openEditForm()
}

function openEditForm() {
    $editForm.dialog('open')
}

function closeModal() {
    resetForm();
    $editForm.dialog('close');
}

function setContacts(list) {
    return contactsList = list;
}

function renderContacts(list) {
    let html = list.map(createContactHtml).join('');
    $tBody.html(html);
}

function getElementId(el) {
    return $(el).closest('.line').data('id');
}

function deleteContact(contactId) {
    contactsList.filter(contact => contact.id !== contactId);
    ContactsSource.delete(contactId);
    let $el = findElById(contactId);
    $el && $el.remove();
}

function findElById(id) {
    return $tBody.find(`[data-id="${id}"]`);
}

function addContact(item) {
    if (isInputValid()){
        addInfo(item);
    } else {
        alert('Fill all fields')
    }
}

function isInputValid(){
    return $nameInput.val() &&
        $surnameInput.val() &&
        $phoneInput.val() 
}

function addInfo(contact) {
    ContactsSource.create(contact).then((data) => {
        contactsList.push(data);
        let newContactHtml = createContactHtml(data);
        $tBody.append(newContactHtml);
        resetForm();
    });
    
}

function createContactHtml(contact) {
    return contactTemplate
        .replace('{{id}}', contact.id)
        .replace('{{name}}', contact.name)
        .replace('{{surname}}', contact.surname)
        .replace('{{phone}}', contact.phone);
}

function updateContact(item) {
    ContactsSource.update(item)
    contactsList = contactsList.map((el) => (el.id != item.id ? el : item))
    renderContacts(contactsList);
    resetForm();
}

function editContact(id) {
    let contact = contactsList.find((el) => el.id == id);
    fillForm(contact)
    openEditForm() 
}

function fillForm(obj) {
    $idInput.val(obj.id);
    $nameInput.val(obj.name);
    $surnameInput.val(obj.surname);
    $phoneInput.val(obj.phone);
}

function saveContact() {
    let newContact = getInfo();
    if (newContact.id) {
        updateContact(newContact);
    } else {
        addContact(newContact);
    }
}

function getInfo() {
    let contact = {};
    $inputs.each((index,inp) => {
        contact[inp.name] = inp.value;
    });
    return contact;
}

function resetForm() {
    $inputs.val('')
    // $('#contact-form').trigger('reset');
}