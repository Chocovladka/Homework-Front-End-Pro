const ALBUMS_URL = 'http://jsonplaceholder.typicode.com/albums';
const IMAGES_URL = 'http://jsonplaceholder.typicode.com/photos?albumId=';

class Controller{
    constructor($container, $albumsContainer, $imagesContainer) {
        this.$container = $container
        this.$albumsContainer = $albumsContainer
        this.$imagesContainer = $imagesContainer

        this.galleryCollection = new Collection(ALBUMS_URL, IMAGES_URL)
        this.galleryCollection.fetch()
            .then((data) => {
                this.renderList();
                this.showFirstAlbumImages(data)
            });
        
        this.galleryView = new GalleryView({
            onClick:(id)=>this.showImages(id)
        });
        this.galleryView.appendTo($container, this.galleryView._$albumsEl);
        this.galleryView.appendTo($container, this.galleryView._$galleryEl);
    
        
    }

    showFirstAlbumImages(list) {
        console.log(list)
        if (list.length) {
            console.log(2)
            this.showImages(list[0].id)
        }
    }

    showImages(id) {
        this.galleryCollection.getImage(id)
        .then((data)=> this.galleryView.renderImages(data))
    }

    renderList() {
        this.galleryView.renderList(this.galleryCollection.getAlbumList())
    }
}