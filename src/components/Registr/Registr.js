import React from "react";
import logo from "../../images/logo.svg";
import "../Registr/register.css";
import { Link } from "react-router-dom";
import validator from "validator";

function Register({ onSignUp }) {
    const [values, setValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        onSignUp(values);
    }
    function handleChange(e) {
        if (e.target.name === "email") {
            if (!validator.isEmail(e.target.value)) {
                e.target.setCustomValidity("Неправильный адрес почты");
            } else {
                e.target.setCustomValidity("");
            }
        }

        setValues({ ...values, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: e.target.validationMessage });
        setIsValid(e.target.closest("form").checkValidity());
    }
    return (
        <section className="register">
            <Link to="/" className="register__logo-center">
                <img className="register__logo" src={logo} alt="Логотип" />
            </Link>
            <h2 className="register__title">Добро пожаловать</h2>
            <form className="register__form" onSubmit={handleSubmit} action="/">
                <label className="register__label">Имя</label>
                <input
                    className="register__input"
                    value={values.name || ""}
                    onChange={handleChange}
                    type="text"
                    id="name"
                    name="name"
                    minLength="2"
                    maxLength="40"
                    required
                />
                <span className="register__error">{errors.name}</span>
                <label className="register__label">E-mail</label>
                <input
                    className="register__input"
                    value={values.email || ""}
                    onChange={handleChange}
                    type="email"
                    id="email"
                    name="email"
                    minLength="2"
                    maxLength="40"
                    required
                />
                <span className="register__error">{errors.email}</span>
                <label className="register__label">Пароль</label>
                <input
                    className="register__input"
                    value={values.password || ""}
                    onChange={handleChange}
                    type="password"
                    id="password"
                    name="password"
                    minLength="5"
                    maxLength="40"
                />
                <span className="register__error">{errors.password}</span>
                <button
                    className="register__btn-auth"
                    type="submit"
                    disabled={!isValid}
                >
                    Зарегистрироваться
                </button>
            </form>
            <Link className="register__link" to="/signin">
                <span className="register__text">Уже зарегистрированы?</span>
                Войти
            </Link>
        </section>
    );
}

export default Register;
