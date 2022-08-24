import React from "react";
import MoviesCardList from "../MovieCardsLists/MovieCardsLists";
import SearchForm from "../SeacrhForm/SeacrhForm";
import "../SavedMovies/savedMovies.css";
import "../Header/header.css"
import {Link} from "react-router-dom";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";

function SavedMovies(props) {
    return (
        <>
            <div className='header header_theme_light'>
                <Link to="/">
                    <img className="header__logo" src={logo} alt="Логотип" />
                </Link>
                {<Navigation/>}
            </div>
            <SearchForm />
            <MoviesCardList />
            <div className="savedMovies"></div>
        </>
    );
}

export default SavedMovies;
