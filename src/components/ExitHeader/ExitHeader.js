import React from "react";
import "./exitHeader.css";
import { Link } from 'react-router-dom';

function ExitHeader(props) {
    return (
        <section className="exitHeader">
            <Link to = "/signup" className="exitHeader__link">Регистрация</Link>
            <Link to = "/signin"><button className="exitHeader__button" type="button">Войти</button></Link>
        </section>

    )
}

export default ExitHeader;
