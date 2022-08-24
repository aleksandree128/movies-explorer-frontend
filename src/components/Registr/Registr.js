import React from "react";
import logo from "../../images/logo.svg";
import "../Registr/register.css";
import { Link } from 'react-router-dom';

function Register(props) {
    return (
        <section className="register">
            <Link to="/" className="register__logo-center"><img className="register__logo" src={logo} alt="Логотип"/></Link>
            <h2 className="register__title">Добро пожаловать</h2>
            <form className="register__form">
                <label className="register__label">Имя</label>
                <input className="register__input" type="name" required/>
                <label className="register__label">E-mail</label>
                <input className="register__input" type="email" required/>
                <label className="register__label">Пароль</label>
                <input className="register__input" type="password" required/>
                <span className="register__error"></span>
            </form>
            <button className="register__btn-auth" type="submit">Войти</button>
            <Link className="register__link" to="/signup">
                <span className="register__text">Уже зарегистрированы?</span>
                Войти
            </Link>
        </section>
    );
}

export default Register;
