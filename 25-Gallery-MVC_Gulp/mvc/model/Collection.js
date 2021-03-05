class Collection extends Http{
    constructor(albumsUrl, imagesUrl) {
        super()
        this._albumsUrl = albumsUrl;
        this._imagesUrl = imagesUrl;
        this._albumList = [];
        this._imageList = [];
    }

    fetch() {
        return this.list(this._albumsUrl)
        .then((data)=>this.setData(data))
    }

    setData(data) {
        return this._albumList = data;
    }

    getAlbumList() {
        console.log(this._albumList)
        return this._albumList;
    }

    getImage(albumId) {
        return this.getOne(this._imagesUrl, albumId)
    }
}