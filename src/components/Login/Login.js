import React from "react";
import logo from "../../images/logo.svg";
import "../Login/login.css";
import { Link } from "react-router-dom";
import validator from "validator";

function Login({ onSignIn }) {
    const [values, setValues] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);
    const [errors, setErrors] = React.useState({});

    function handleSubmit(e) {
        e.preventDefault();
        onSignIn(values);
    }

    function handleChange(e) {
        if (e.target.name === "email") {
            if (!validator.isEmail(e.target.value)) {
                e.target.setCustomValidity("Некорректно введен email");
            } else {
                e.target.setCustomValidity("");
            }
        }

        setValues({ ...values, [e.target.name]: e.target.value });
        setIsValid(e.target.closest("form").checkValidity());
        setErrors({ ...errors, [e.target.name]: e.target.validationMessage });
    }

    return (
        <section className="login">
            <Link to="/" className="login__logo-center">
                <img className="login__logo" src={logo} alt="Логотип" />
            </Link>
            <h2 className="login__title">Рады видеть!</h2>
            <form className="login__form" onSubmit={handleSubmit}>
                <label className="login__label">E-mail</label>
                <input
                    className="login__input"
                    type="email"
                    onChange={handleChange}
                    placeholder="Email"
                    id="email"
                    name="email"
                    value={values.email || ""}
                    minLength="2"
                    maxLength="40"
                    required
                />
                <span className="login__error">{errors.email}</span>
                <label className="login__label">Пароль</label>
                <input
                    className="login__input"
                    value={values.password || ""}
                    onChange={handleChange}
                    type="password"
                    placeholder="Пароль"
                    id="password"
                    name="password"
                    minLength="5"
                    maxLength="40"
                    required
                />
                <span className="login__error">{errors.password}</span>
                <button
                    className="login__btn-login"
                    type="submit"
                    disabled={!isValid}
                >
                    Войти
                </button>
            </form>
            <Link className="login__link" to="/signup">
                <span className="login__text">Ещё не зарегистрированы?</span>
                Регистрация
            </Link>
        </section>
    );
}

export default Login;
