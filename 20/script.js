const STICKERS_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/';
const DELETE_ICON_SELECTOR = ('.delete-icon');
const STICKER_SELECTOR = ('.sticker');
const TEXTAREA_SELECTOR = ('.your-text');
const stickersSource = new Http(STICKERS_URL);

let $stickerTemplate = $('#sticker-template').html();
let $stickerWrap = $('#sticker-wrap');
let $addButton = $('#add-sticker-btn');

let stickersList = [];

$addButton.on('click', onAddBtnClick);
$stickerWrap.on('click', DELETE_ICON_SELECTOR, onStickerWrapClick)
            .on('focusout', STICKER_SELECTOR, onStickerFocusout);

            
init();

function init() {
    stickersSource.get()
    .then(setStickers)
    .then(renderStickers);
}

function setStickers(data) {
    return stickersList = data;
}

function renderStickers(list) {
    let html = list.map(createStickerHtml).join('');
    $stickerWrap.html(html);
}

function createStickerHtml(sticker) {
    return $stickerTemplate
        .replace('{{id}}', sticker.id)
        .replace('{{description}}', sticker.description);
}

function onAddBtnClick() {
    let $newSticker = $(createNewStickerHtml())
    stickersSource.create($newSticker)
        .then(($newSticker) => {
            stickersList.push($newSticker)
            renderNewSticker($newSticker)
        })
    
}

function createSticker() {
    return createNewStickerHtml()
}

function renderNewSticker(sticker) {
    let $stickerEl = createStickerHtml(sticker)
    $stickerWrap.append($stickerEl)
}

function createNewStickerHtml() {
    $stickerTemplate.replace('{{id}}', '')
                    .replace('{{description}}', '')
}

function onStickerWrapClick(e) {
    let $thisSticker = getSticker(e);
    onDeleteIconClick(($thisSticker.dataset.id))
}

function getSticker(e) {
    return e.target.closest('.sticker')
}

function onDeleteIconClick(stickerId) {
    stickersList = stickersList.filter((sticker) => sticker.id !== stickerId);
    stickersSource.delete(stickerId);
    let $el = findElById(stickerId);
    $el && $el.remove();
}
function findElById(id) {
    return $stickerWrap.find(`[data-id="${id}"]`);
}

function onStickerFocusout(e) {
    updateSticker(getSticker(e).dataset.id, getSticker(e))
}

function updateSticker(id,textarea) {
    let $sticker = findStickerById(id)
    $sticker.description = getStickerText(textarea)
    stickersSource.update($sticker)
}

function findStickerById(id) {
    return stickersList.find((sticker) => sticker.id == id)
}

function getStickerText(textarea) {
    return (textarea.querySelector(TEXTAREA_SELECTOR).value)
}