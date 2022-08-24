import React from "react";
import "./profile.css";
import "../Header/header.css"
import { Link } from 'react-router-dom';
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";

function Profile(props) {
    return (
        <>
            <div className='header header_theme_light'>
                <Link to="/">
                    <img className="header__logo" src={logo} alt="Логотип" />
                </Link>
                {<Navigation/>}
            </div>
            <section className="profile">
            <h2 className="profile__greeting">Привет, Александр!</h2>
            <form className="profile__user">
                <div className="profile__line">
                    <label className="profile__caption">Имя</label>
                    <input className="profile__content" id="name" placeholder="Александр"></input>
                </div>
                <div className="profile__line">
                    <label className="profile__caption">E-mail</label>
                    <input className="profile__content" id="email" placeholder="user@mail.ru"></input>
                </div>
            </form>
            <button className="profile__btn-update" type="button">Редактировать</button>
            <Link to = "/movies" className="profile__exit">Выйти из аккаунта</Link>
            </section>
        </>

    );
}

export default Profile;
