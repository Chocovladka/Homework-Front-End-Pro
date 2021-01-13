const LIST_ITEM_CLASS = 'list-item';
const DELETE_ICON_CLASS = 'delete-icon';

let taskForm = document.querySelector('#enter-task-form');

let listItemTemplate = document.querySelector('#list-item-template').innerHTML;

let addButton = document.querySelector('#add-btn');

let input = document.querySelector('#task-input');

let ulElement = document.querySelector('#list');

taskForm.addEventListener('submit', onTaskFormSubmit);
ulElement.addEventListener('click', onUlElementClick);

function onTaskFormSubmit(e) {
    e.preventDefault();
    if (!input.value) {
        addButton.setAttribute('disabled', disabled);
    }
    addTask(input);
    clearInput();
}

function createListItemHtml(el) {
    return listItemTemplate.replace('{{to-do-item}}', el.value);
}

function addTask(input) {
    let newListItem = createListItemHtml(input);
    insertNewListItem(newListItem);
}

function insertNewListItem(el) {
    ulElement.insertAdjacentHTML('beforeend', el);
}

function clearInput() {
    input.value = '';
}

function onUlElementClick(e) {
    if (e.target.classList.contains(DELETE_ICON_CLASS)) {
        deleteTask(e);
    } else if (e.target.classList.contains(LIST_ITEM_CLASS)) {
        addColorDone(e);
    }
}

function deleteTask(e) {
    e.target.closest('.list-item').remove();
}

function addColorDone(e) {
    e.target.classList.toggle('done-color');
}