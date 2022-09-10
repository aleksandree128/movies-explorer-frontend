import React from "react";
import MoviesCardList from "../MovieCardsLists/MovieCardsLists";
import SearchForm from "../SeacrhForm/SeacrhForm";
import "../SavedMovies/savedMovies.css";
import "../Header/header.css";

function SavedMovies({
                         user = {},
                         onDeleteClick = false,
                         savedMoviesList = [],
                     }) {
    const [inputValue, setInputValue] = React.useState(false);
    const [shortMovies, setShortMovies] = React.useState(false);
    const [notFound, setNotFound] = React.useState(true);
    const [showedMovies, setShowedMovies] = React.useState(savedMoviesList);
    const [filteredMovies, setFilteredMovies] = React.useState(showedMovies);

    function filterMovies(movies, request, shortMoviesSwitch) {
        const foundMovies = movies.filter((movie) => {
            return movie.nameRU.toLowerCase().includes(request.toLowerCase())
        });

        if (shortMoviesSwitch) {
            return filterShortMovies(foundMovies);
        } else {
            return foundMovies;
        }
    }

    function filterShortMovies(movies) {
        return movies.filter((movie) => movie.duration <= 40);
    }

    function handleSearch(value) {
        localStorage.setItem("savedMoviesSearch", value);
        if (
            filterMovies(savedMoviesList, value, shortMovies).length === 0
        ) {
            setNotFound(true);
        } else {
            setNotFound(false);
            setFilteredMovies(
                filterMovies(savedMoviesList, value, shortMovies)
            );
            setShowedMovies(
                filterMovies(savedMoviesList, value, shortMovies)
            );
            localStorage.setItem(
                "savedMovies",
                JSON.stringify(savedMoviesList)
            );
        }
    }

    function handleShortFilms() {
        if (!shortMovies) {
            setShortMovies(true);
            localStorage.setItem("shortSavedMovies", true);
            setShowedMovies(filterShortMovies(filteredMovies));
            filterShortMovies(filteredMovies).length === 0
                ? setNotFound(true)
                : setNotFound(false);
        } else {
            setShortMovies(false);
            localStorage.setItem("shortSavedMovies", false);
            filteredMovies.length === 0
                ? setNotFound(true)
                : setNotFound(false);
            setShowedMovies(filteredMovies);
        }
    }

    React.useEffect(() => {
        if (localStorage.getItem("savedMoviesSearch")) {
            setInputValue(localStorage.getItem("savedMoviesSearch"));
        }
    }, []);

    React.useEffect(() => {
        if (localStorage.getItem("shortSavedMovies") === "true") {
            setShortMovies(true);
            setShowedMovies(filterShortMovies(savedMoviesList));
        } else {
            setShortMovies(false);
            setShowedMovies(savedMoviesList);
        }
    }, [savedMoviesList, user]);

    React.useEffect(() => {
        if (savedMoviesList.length !== 0) {
            setNotFound(false);
        } else {
            setNotFound(true);
        }
    }, [savedMoviesList]);

    return (
        <>
            <SearchForm
                handleSearchSubmit={handleSearch}
                checkBoxClick={handleShortFilms}
                shortMovies={shortMovies}
                inputValue={inputValue}
            />
            <MoviesCardList
                nothingFound={notFound}
                moviesList={showedMovies}
                onDeleteClick={onDeleteClick}
                onSaveClick={false}
                savedMoviesPage={true}
                savedMovies={savedMoviesList}
            />
            <div className="savedMovies"></div>
        </>
    );
}

export default SavedMovies;
