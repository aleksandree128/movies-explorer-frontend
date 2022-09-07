class MoviesApi {
    constructor({ headers }) {
        this.headers = headers;
    }
    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(res.status);
        }
    }
    getMovies() {
        return fetch('https://api.nomoreparties.co/beatfilm-movies', {
            method: 'GET',
            headers: this.headers,
        }).then(this._checkResponse);
    }
}

const moviesApi = new MoviesApi({
    headers: {
        "Content-Type": "application/json",
    },
});

export default moviesApi;
