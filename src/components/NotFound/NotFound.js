import React from "react";
import "../NotFound/notFound.css";
import { Link } from "react-router-dom";

function NotFound(props) {
    return (
        <section className="notFound">
            <h2 className="notFound__title">404</h2>
            <p className="notFound__text">Страница не найдена</p>
            <Link to="/" className="notFound__back">
                Назад
            </Link>
        </section>
    );
}

export default NotFound;
