const LIST_ITEM_CLASS = 'list-item';
const LIST_ITEM_SELECTOR = '.' + LIST_ITEM_CLASS;
const DELETE_ICON_CLASS = 'delete-icon';
const DONE_CLASS = 'done';

let taskForm = document.querySelector('#enter-task-form');
let listItemTemplate = document.querySelector('#list-item-template').innerHTML;

let addButton = document.querySelector('#add-btn');
let taskInput = document.querySelector('#task-input');
let listEl = document.querySelector('#list');

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos/';
let todoList = [];

init();

function init() {
    fetchTodos();
}

function fetchTodos() {
    fetch(TODOS_URL)
        .then(res => res.json())
        .then(setTodos)
        .then(renderTodos);
}

function setTodos(list) {
    return todoList = list;
}

function renderTodos(list) {
    let html = list.map(createListItemHtml).join('');
    listEl.innerHTML = html;
}

function createListItemHtml(todo) {
    return listItemTemplate.replace('{{to-do-item}}', todo.title)
        .replace('{{done-class}}', todo.completed ? DONE_CLASS : ' ')
        .replace('{{id}}', todo.id);
}

taskForm.addEventListener('submit', onTaskFormSubmit);
listEl.addEventListener('click', onlistElClick);

function onTaskFormSubmit(e) {
    e.preventDefault();
    console.log(e)
    let title = taskInput.value;
    if (!title) {
        alert('Invalid value');
    } else{
        addTask(title);
        clearInput();
    }
}

function onlistElClick(e) {
    const taskEl = getTaskElement(e.target);

    switch(true){
    case e.target.classList.contains(DELETE_ICON_CLASS) :
        return deleteTask(+taskEl.dataset.id, taskEl);
    case e.target.classList.contains(LIST_ITEM_CLASS) :
        return toggleTask(+taskEl.dataset.id);
    }
}

function addTask(title) {
    let newListItem = createListItemHtml(title);
    insertNewListItem(newListItem);
}

function insertNewListItem(title) {
    listEl.insertAdjacentHTML('beforeend', title);
}

function clearInput() {
    taskInput.value = '';
}

function getTaskElement(el) {
    return el.closest(LIST_ITEM_SELECTOR);
}

function toggleTask(todoId) {
    findTodo(todoId).completed = !todo.completed;
    renderTodos(todoList);
}

function deleteTask(todoId, taskEl) {
    let index = todoList.indexOf(findTodo(todoId));
    todoList.splice(index, 1);
    taskEl.remove();
}

function findTodo(todoId) {
    let todo = todoList.find(todo => todo.id === todoId);
    return todo
}
