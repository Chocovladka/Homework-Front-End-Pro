class Http {
    constructor(baseUrl) {
        this._baseUrl = baseUrl;
    }

    request(url, uri, method, data) {
        return fetch(url + '/' + uri, {
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

    post(url, data) {
        return this.request(url, '', 'POST', data);
    }

    put(url,id, data) {
        return this.request(url, id, 'PUT', data);
    }

    delete(url, id) {
        return this.request(url, id, 'DELETE');
    }

    create(url, data) {
        return this.post(url, data);
    }

    update(url, data) {
        return this.put(url, data.id, data);
    }

    list(url) {
        return this.get(url);
    }

    getOne(url, id) {
        return this.get(url,id);
    }
}