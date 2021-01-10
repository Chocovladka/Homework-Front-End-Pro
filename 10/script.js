let tBody = document.querySelector('#t-body');

let button = document.querySelector('#btn');

let nameInput = document.querySelector('#name');

let surnameInput = document.querySelector('#surname');

let phoneInput = document.querySelector('#phone');

let actionInput = document.querySelector('#action');

let newTr = document.createElement('tr');
let inputs = document.querySelectorAll('input');

// button.addEventListener('click', onAddBtnClick)

container.addEventListener('click', onBtnClick)

function onBtnClick(e) {
    if (e.target.classList.contains("delete-btn"))  {
        onDeleteBtnClick(e);
    } else if (e.target.id === "btn") {
        onAddBtnClick(e);
    }
}

function onDeleteBtnClick(e) {
    e.target.closest('tr').remove();
}

function onAddBtnClick() {
    if ((!nameInput.value) ||
        (!surnameInput.value) ||
        (!phoneInput.value) ||
        (!actionInput.value)) {
        button.setAttribute('disabled', disabled);
    }
    addInfo(nameInput.value, surnameInput.value, phoneInput.value, actionInput.value);
    clearInput();
}

// function addInfo() {
//     let contacts = [nameInput.value, surnameInput.value, phoneInput.value, actionInput.value];
//     for (let i = 0; i < contacts.length; i++){
//         let el = document.createElement('td');
//         el.textContent = contacts[i];
//         document.querySelector('tr').append(el)
//     }
// }

function addInfo(name, surname, phone, action) {
    let elHtml = `
    <tr>
    <td>${name}</td>
    <td>${surname}</td>
    <td>${phone}</td>
    <td>${action}</td>
    <td>
    <button class="button delete-btn">Удалить</button>
    </td>
    </tr>
    `
    tBody.insertAdjacentHTML("beforeend", elHtml)
}

function clearInput() {
    for (let i = 0; i < inputs.length; i++){
        inputs[i].value = '';
    }
}