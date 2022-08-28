import React from "react";
import MoviesCardList from "../MovieCardsLists/MovieCardsLists";
import "../Movie/movie.css";
import "../Header/header.css";
import SearchForm from "../SeacrhForm/SeacrhForm";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Movies(props) {
    return (
        <>
            <div className="header header_theme_light">
                <Link to="/">
                    <img className="header__logo" src={logo} alt="Логотип" />
                </Link>
                {<Navigation />}
            </div>
            <SearchForm />
            <MoviesCardList />
            <div className="moviesCardList">
                <button className="moviesCardList__btn" type="button">
                    Ещё
                </button>
            </div>
        </>
    );
}

export default Movies;
