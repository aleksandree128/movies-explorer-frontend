import React from "react";
import MoviesCardList from "../MovieCardsLists/MovieCardsLists";
import "../Movie/movie.css";
import SearchForm from "../SeacrhForm/SeacrhForm";
import Loader from "../Loader/Loader";
import moviesApi from "../../utils/MovieApi";

function Movies({
    user = {},
    onSaveClick = false,
    onDeleteClick = false,
    onSavedMovie = [],
}) {
    const [isDataLoading, setIsDataLoading] = React.useState(false);
    const [shortMovies, setShortMovies] = React.useState(false);
    const [filteredMovies, setFilteredMovies] = React.useState([]);
    const [initialMovies, setInitialMovies] = React.useState([]);
    const [nothingFound, setNothingFound] = React.useState(true);
    const [inputValue, setInputValue] = React.useState(false);
    const [isError, setIsError] = React.useState(false);

    function filterMovies(movies, request, shortMoviesSwitch) {
        const foundMovies = movies.filter((movie) => {
            return movie.nameRU.toLowerCase().includes(request.toLowerCase());
        });

        if (shortMoviesSwitch) {
            return filterShortMovies(foundMovies);
        } else {
            return foundMovies;
        }
    }

    function handleSetFilteredMovies(movies, request, shortMoviesSwitch) {
        const moviesList = filterMovies(movies, request, shortMoviesSwitch);
        moviesList.length === 0
            ? setNothingFound(true)
            : setNothingFound(false);
        setInitialMovies(moviesList);
        setFilteredMovies(
            shortMoviesSwitch ? filterShortMovies(moviesList) : moviesList
        );
        localStorage.setItem("movies", JSON.stringify(moviesList));
    }

    function handleSearchSubmit(inputValue) {
        setIsDataLoading(true);
        localStorage.setItem("movieSearch", inputValue);
        localStorage.setItem("shortMovies", shortMovies);
        moviesApi
            .getMovies()
            .then((res) => {
                handleSetFilteredMovies(res, inputValue, shortMovies);
            })
            .catch((err) => {
                setIsError(true);
                console.log(err);
            })
            .finally(() => setIsDataLoading(false));
    }

    function filterShortMovies(movies) {
        return movies.filter((movie) => movie.duration <= 40);
    }

    function handleShortFilms() {
        setShortMovies(!shortMovies);
        if (!shortMovies) {
            if (filterShortMovies(initialMovies).length === 0) {
                setFilteredMovies(filterShortMovies(initialMovies));
                setNothingFound(true);
            } else {
                setFilteredMovies(filterShortMovies(initialMovies));
                setNothingFound(false);
            }
        } else {
            initialMovies.length === 0
                ? setNothingFound(true)
                : setNothingFound(false);
            setFilteredMovies(initialMovies);
        }
        localStorage.setItem("shortMovies", !shortMovies);
    }

    React.useEffect(() => {
        if (localStorage.getItem("movieSearch")) {
            setInputValue(localStorage.getItem("movieSearch"));
        }
    }, []);

    React.useEffect(() => {
        if (localStorage.getItem("shortMovies") === "true") {
            setShortMovies(true);
        } else {
            setShortMovies(false);
        }
    }, [user]);

    React.useEffect(() => {
        if (localStorage.getItem("movies")) {
            const movies = JSON.parse(localStorage.getItem("movies"));
            movies.length === 0
                ? setNothingFound(true)
                : setNothingFound(false);
            setInitialMovies(movies);
            if (localStorage.getItem("shortMovies") === "true") {
                setFilteredMovies(filterShortMovies(movies));
            } else {
                setFilteredMovies(movies);
            }
        } else {
            setNothingFound(true);
        }
    }, [user]);

    return (
        <>
            <SearchForm
                handleSearchSubmit={handleSearchSubmit}
                checkBoxClick={handleShortFilms}
                inputValue={inputValue}
                shortMovies={shortMovies}
            />
            {isDataLoading ? (
                <Loader />
            ) : (
                <>
                    {isError ? (
                        <span id="movies__error" className="movies__error">
                            Во время запроса произошла ошибка.
                            Немного подождите или попробуйте ещё раз
                        </span>
                    ) : (
                        <MoviesCardList
                            moviesList={filteredMovies}
                            nothingFound={nothingFound}
                            onSaveClick={onSaveClick}
                            onDeleteClick={onDeleteClick}
                            savedMoviesList={onSavedMovie}
                            savedMoviesPage={false}
                        />
                    )}
                </>
            )}
        </>
    );
}

export default Movies;
