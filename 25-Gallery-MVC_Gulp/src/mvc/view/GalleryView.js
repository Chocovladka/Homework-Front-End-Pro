
class GalleryView{

    static ALBUM_ITEM_SELECTOR = '.album-list-item';

    constructor(options) {
        this._option = options;
        this._$albumsEl = this.initAlbums();
        this._$galleryEl = this.initGallery();
    }

    initAlbums() {
        return $(`<div class="container-item" id="album-list"></div>`)
            .on('click',
                GalleryView.ALBUM_ITEM_SELECTOR,
            this.onAlbumItemClick.bind(this))
    }

    initGallery() {
        return $(`<div class="container-item" id="image-wrap"></div>`)
    }

    appendTo($container, el) {
        $container.append(el);
    }

    renderList(list) {
        const html = list.map(item => this.generateItemHtml(item)).join('');
        this._$albumsEl.html(html);
    }

    generateItemHtml(item) {
        return (`<div class="album-list-item" data-id="${item.id}">${item.title}</div>`)
    }

    getElementId(el) {
        let parent = el.closest(GalleryView.ALBUM_ITEM_SELECTOR);
        return parent && parent.dataset.id
    }

    onAlbumItemClick(e) {
        console.log(e)
        let id = this.getElementId(e.target);
        this._option.onClick(id)
    }

    renderImages(list) {
        const html = list.map(item => this.generateImageHtml(item)).join('');
        this._$galleryEl.html(html);
    }

    generateImageHtml(img) {
        return(`<div class="image-item" data-id="${img.id}"><img src="${img.thumbnailUrl}" alt="${img.title}"></div>`)
    }
}