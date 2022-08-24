import React from "react";
import logo from "../../images/logo.svg";
import "../Login/login.css";
import { Link } from 'react-router-dom';

function Login(props) {
    return (
        <section className="login">
            <img className="login__logo" src={logo} alt="Логотип"/>
            <h2 className="login__title">Рады видеть!</h2>
            <form className="login__form">
                <label className="login__label">E-mail</label>
                <input className="login__input" type="email" required/>
                <label className="login__label">Пароль</label>
                <input className="login__input" type="password" required/>
                <span className="login__error"></span>
            </form>
            <button className="login__btn-login" type="submit">Войти</button>
            <Link className="login__link" to="/signup">
                <span className="login__text">Ещё не зарегистрированы?</span>
                Регистрация
            </Link>
        </section>
    );
}

export default Login;
