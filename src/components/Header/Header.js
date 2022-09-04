import React from "react";
import logo from "../../images/logo.svg";
import ExitHeader from "../ExitHeader/ExitHeader";
import "../Header/header.css";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

function Header({ loggedIn }) {
    return (
        <header className={`header ${loggedIn ? "header_theme_light" : ""}`}>
            <Link to="/">
                <img className="header__logo" src={logo} alt="Логотип" />
            </Link>
            {loggedIn ? <Navigation /> : <ExitHeader />}
        </header>
    );
}

export default Header;
