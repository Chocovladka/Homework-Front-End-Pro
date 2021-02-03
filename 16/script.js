let USERS_URL = 'https://api.github.com/users/';
let loginInput = document.querySelector('#login-input');
let avatarField = document.querySelector('#avatar');
let repField = document.querySelector('#repositories');
let followersField = document.querySelector('#followers');
let followingField = document.querySelector('#following');

document.querySelector('#search-btn').addEventListener('click', onSearchBtnClick);

function onSearchBtnClick() {
    isInputValid();
    let userLogin = loginInput.value;
    fetch(USERS_URL + userLogin)
        .then(res => res.json())
        .then(data => showInfo(data))
        .catch(console.warn('error'));
    
}

function isInputValid() {
    if (!loginInput.value) {
       alert('Введи логин пользователя') 
    };
};

function showInfo(data) {
    avatarField.innerHTML = data.avatar_url;
    repField.innerHTML = data.public_repos;
    followersField.innerHTML = data.followers;
    followingField.innerHTML = data.following;

}

// Chocovladka
// agribanov

// function onSearchBtnClick() {
//     isInputValid();
//     let userLogin = loginInput.value;
//     fetch(USERS_URL + userLogin)
//         .then(res => res.json())
//         .then(data => console.log(data.name));
    
// }

// .catch(console.log('error'))