import React from "react";
import "../MovieCardsLists/movieCardsLists.css";
import MoviesCard from "../MovieCards/MovieCards";

function MovieCardsLists({
    nothingFound = true,
    moviesList = [],
    onSaveClick = false,
    onDeleteClick = false,
    savedMoviesList = [],
    savedMoviesPage = false,
}) {
    const [movieList, setMovieList] = React.useState([]);
    const [cardsShowDetails, setCardsShowDetails] = React.useState({
        total: 12,
        extra: 3,
    });
    const [isMount, setIsMount] = React.useState(true);
    const getScreenWidth = React.useCallback(() => window.innerWidth, []);
    const [screenWidth, setScreenWidth] = React.useState(getScreenWidth());
    const moviesCount = {
        bigScreen: { width: 1280, cards: { total: 12, extra: 3 } },
        normalScreen: { width: 768, cards: { total: 8, extra: 2 } },
        smallScreen: { width: 480, cards: { total: 5, extra: 2 } },
    };
    React.useEffect(() => {
        function handleScreenResize() {
            setScreenWidth(getScreenWidth());
        }
        window.addEventListener("resize", resizeController, false);
        let resizeTimer;
        function resizeController() {
            if (!resizeTimer) {
                resizeTimer = setTimeout(() => {
                    resizeTimer = null;
                    handleScreenResize();
                }, 1000);
            }
        }
        return () => window.removeEventListener("resize", handleScreenResize);
    }, [getScreenWidth]);

    React.useEffect(() => {
        if (screenWidth >= moviesCount.bigScreen.width) {
            setCardsShowDetails(moviesCount.bigScreen.cards);
        } else if (
            screenWidth <= moviesCount.bigScreen.width &&
            screenWidth > moviesCount.normalScreen.width
        ) {
            setCardsShowDetails(moviesCount.normalScreen.cards);
        } else {
            setCardsShowDetails(moviesCount.smallScreen.cards);
        }
        return () => setIsMount(false);
    }, [screenWidth, isMount]);

    function handleClickElse() {
        const start = movieList.length;
        const end = start + cardsShowDetails.extra;
        const additional = moviesList.length - start;

        if (additional > 0) {
            const newCards = moviesList.slice(start, end);
            setMovieList([...movieList, ...newCards]);
        }
    }

    React.useEffect(() => {
        if (moviesList.length) {
            const res = moviesList.filter(
                (item, i) => i < cardsShowDetails.total
            );
            setMovieList(res);
        }
    }, [moviesList, savedMoviesPage, cardsShowDetails.total]);

    function getSavedMovieCard(savedMoviesList, movie) {
        return savedMoviesList.find(
            (savedMovie) => savedMovie.movieId === movie.id
        );
    }
    return (
        <section className="movieCardsLists">
            <>
                {nothingFound ? (
                    <p className="moviesCardList__notFound">
                        ???????????? ???? ??????????????.
                    </p>
                ) : (
                    <>
                        <div className="movieCardsLists__elements">
                            {movieList.map((movie) => (
                                <MoviesCard
                                    saved={getSavedMovieCard(
                                        savedMoviesList,
                                        movie
                                    )}
                                    key={movie.id || movie._id}
                                    movie={movie}
                                    onSaveClick={onSaveClick}
                                    onDeleteClick={onDeleteClick}
                                    savedMoviesPage={savedMoviesPage}
                                />
                            ))}
                        </div>
                        {movieList.length >= 5 &&
                        movieList.length < moviesList.length ? (
                            <div className="moviesCardList__else">
                                <button
                                    className="moviesCardList__btn"
                                    onClick={handleClickElse}
                                >
                                    ??????
                                </button>
                            </div>
                        ) : (
                            ""
                        )}
                    </>
                    )}
            </>
        </section>
    );
}

export default MovieCardsLists;
