import React from "react";
import "../MovieCards/movieCards.css";

function MovieCards(props) {

    return (
        <section className="movieCards">
            <div className="movieCards__top">
                <div className="movieCards__aboutFilm">
                    <h2 className="movieCards__title">{props.title}</h2>
                    <p className="movieCards__text">{props.duration}</p>
                </div>
                <img className="movieCards__image" src={props.picture} alt="Фото фильма"/>
            </div>
            <button className="movieCards__saved" type="button"></button>
        </section>
    )
}

export default MovieCards
