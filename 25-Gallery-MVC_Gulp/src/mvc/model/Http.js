class Http {
    constructor(baseUrl) {
        this._baseUrl = baseUrl;
    }

    request(url, uri, method, data) {
        return fetch(url + uri, {
            method,
            body: data ? JSON.stringify(data) : null,
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => res.json());
    }

    get(url, uri = '') {
        return this.request(url, uri, 'GET');
    }

    list(url) {
        return this.get(url);
    }

    getOne(url, id) {
        return this.get(url,id);
    }
}