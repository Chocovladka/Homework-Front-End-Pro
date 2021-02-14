const ALBUMS_URL = 'http://jsonplaceholder.typicode.com/albums';
const IMAGES_URL = 'http://jsonplaceholder.typicode.com/photos?albumId={{id}}';
const ALBUM_ITEM_CLASS = 'album-list-item';
let albumContainer = document.querySelector('#album-list');
let imageContainer = document.querySelector('#image-wrap');
let albumTemplate = document.querySelector('#album-template').innerHTML;
let imageTemplate = document.querySelector('#image-template').innerHTML;
let albumList = [];
let imageGallery= [];

albumContainer.addEventListener('click', onAlbumContainerClick);

init()

function init() {
    fetch(ALBUMS_URL)
        .then((res) => res.json())
        .then(setAlbumList)
        .then(renderAlbums)
        .then(showFirstAlbumImages);
}

function setAlbumList(list) {
    return albumList = list;
}

function renderAlbums(list) {
    let html = list.map(createAlbumHtml).join('');
    albumContainer.innerHTML = html;
    return list
}

function createAlbumHtml(album) {
    return albumTemplate
        .replace('{{id}}', album.id)
        .replace('{{title}}', album.title);
}

function showFirstAlbumImages(list) {
    if (list.length){
        showImages(list[0].id);
    }
}

function showImages(albumId) {
    fetch(getImagesUrl(albumId))
        .then((res) => res.json())
        .then(renderImages);
}

function getImagesUrl(albumId) {
    return IMAGES_URL.replace('{{id}}', albumId);
}

function renderImages(list) {
    let html = list.map(createImageHtml).join('');
    imageContainer.innerHTML = html;
    console.log(html)
}

function createImageHtml(img) {
    return imageTemplate
        .replace('{{id}}', img.id)
        .replace('{{title}}', img.title)
        .replace('{{url}}', img.thumbnailUrl);
        
}

function onAlbumContainerClick(e) {
    e.preventDefault();

    if (e.target.classList.contains(ALBUM_ITEM_CLASS)) {
        showImages(e.target.dataset.id)
    }
}


