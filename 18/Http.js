class Http{
    constructor(baseUrl) {
        this._baseUrl = baseUrl;
    }

    request(uri, method, data) {
        return fetch(this._baseUrl + uri,{
            method,
            body: data ? JSON.stringify(data) : null,
            headers: {
            'Content-Type': 'application/json',
            }
        }).then((res) => res.json());
    }

    get(uri='') {
        return this.request(uri, 'GET');
    }

    delete(id) {
        return this.request(id, 'DELETE');
    }

    post(data) {
        return this.request('', 'POST', data);
    }

    put(id, data) {
        return this.request(id, 'POST', data);
    }

    create(data) {
        return this.post(data);
    }

    update(data) {
        return this.put(data.id, data);
    }

    list() {
        return this.get();
    }

    getOne(id) {
        return this.get(id);
    }
}

