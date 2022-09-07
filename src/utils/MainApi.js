class MainApi {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    registration({ name, email, password }) {
        return fetch(`${this._baseUrl}/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
        }).then((res) => this._checkResponse(res));
    }

    login({ password, email }) {
        return fetch(`${this._baseUrl}/signin`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                password: password,
                email: email,
            }),
        }).then((res) => this._checkResponse(res));
    }

    getUserData(jwt) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
                "Content-Type": "application/json",
            },
        }).then((res) => this._checkResponse(res));
    }

    updateUser(data) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
            }),
        }).then(this._checkResponse);
    }

    getMovies(){
        return fetch(`${this._baseUrl}/movies`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
                "Content-Type": "application/json",
            },
        }).then((res) => this._checkResponse(res));
    }

    addMovie(movies){
        console.log(movies)
        return fetch(`${this._baseUrl}/movies`, {
            method: "POST",
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                country: movies.country,
                director: movies.director,
                duration: movies.duration,
                year: movies.year,
                description: movies.description,
                image: 'https://api.nomoreparties.co' + movies.image.url,
                trailerLink: movies.trailerLink,
                thumbnail: 'https://api.nomoreparties.co' + movies.thumbnail,
                movieId: movies.id,
                nameRU: movies.nameRU,
                nameEN: movies.nameEN,
            }),
        }).then(this._checkResponse);
    }

    deleteMovie(movieId){
        return fetch(`${this._baseUrl}/movies/${movieId}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
                "Content-Type": "application/json",
            },
        }).then(this._checkResponse);
    }
}

export const mainApi = new MainApi({
    baseUrl: "https://api.korshinov.diplom.nomoredomains.sbs",
    headers: {
        Accept: "application/json",
    },
});
