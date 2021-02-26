class Collection{
    constructor(url) {
        this._url = url;
        this._list = [];
    }

    fetch() {
        return fetch(this._url)
            .then(res => res.json())
            .then((data)=>this.setData(data))
    }

    setData(data) {
        this._list = data;
    }

    getList() {
        return this._list;
    }

    delete(id) {
        fetch(this._url + '/' + id,
            { method: 'DELETE' })
        
        this._list = this._list.filter(item => item.id !== id)
        return Promise.resolve();
    }

    toggle(id) {
        let item = this._list.find((item) => item.id === id);
        item.completed = !item.completed;
        fetch(this._url + '/' + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(item)
        });
        return Promise.resolve();
    }

    get(id) {
        console.log(id)
        return this._list.find((item) => item.id === id);
    }

    create(todo) {
        fetch(this._url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
            .then(res => res.json())
            .then(item => {
                this._list.push(item)
                console.log(item.id)
                return item.id
            });
        return Promise.resolve();
    }

}