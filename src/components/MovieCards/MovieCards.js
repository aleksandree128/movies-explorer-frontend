import React from "react";
import "../MovieCards/movieCards.css";
import { useLocation } from "react-router-dom";

function MovieCards({
    movie = {},
    onSaveClick = false,
    onDeleteClick = false,
    saved = false,
    savedMoviesPage = false,
}) {
    const { pathname } = useLocation();

    function handleClickSave() {
        onSaveClick(movie);
    }

    function handleClickDelete() {
        onDeleteClick(movie);
    }

    function transferToHouse(duration) {
        return `${Math.floor(duration / 60)}ч ${duration % 60}м`;
    }
    return (
        <>
            <section className="movieCards">
                <div className="movieCards__top">
                    <div className="movieCards__aboutFilm">
                        <h2 className="movieCards__title">{movie.nameRU}</h2>
                        <p className="movieCards__text">
                            {" "}
                            {transferToHouse(movie.duration)}
                        </p>
                    </div>
                    <a
                        className="moviesCard__image-link"
                        href={movie.trailerLink}
                        target="blank"
                    >
                        <img
                            className="movieCards__image"
                            src={
                                pathname === "/saved-movies"
                                    ? `${movie.image}`
                                    : `https://api.nomoreparties.co${movie.image.url}`
                            }
                            alt="Фото фильма"
                        />
                    </a>
                    {!savedMoviesPage ? (
                        <button
                            onClick={
                                saved ? handleClickDelete : handleClickSave
                            }
                            className={
                                saved
                                    ? "movieCards__saved moviesCard__flag_type_active"
                                    : "movieCards__saved moviesCard__flag_type_inactive"
                            }
                        ></button>
                    ) : (
                        <button
                            onClick={handleClickDelete}
                            className="movieCards__saved moviesCard__flag_type_delete"
                        ></button>
                    )}
                </div>
            </section>
        </>
    );
}

export default MovieCards;
