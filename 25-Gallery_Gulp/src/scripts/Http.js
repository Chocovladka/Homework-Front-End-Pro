class Http {
    constructor(baseUrl) {
        this._baseUrl = baseUrl;
    }

    request(uri, method, data) {
        return fetch(this._baseUrl + uri, {
            method,
            body: data ? JSON.stringify(data) : null,
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => res.json());
    }

    get(uri = '') {
        return this.request(uri, 'GET');
    }

    list() {
        return this.get();
    }

    getOne(id) {
        return this.get(id);
    }
}