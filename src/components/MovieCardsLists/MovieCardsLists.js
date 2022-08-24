import image_1 from "../../images/cards/image-1.png"
import image_2 from "../../images/cards/image-2.png"
import image_3 from "../../images/cards/image-3.png"
import image_4 from "../../images/cards/image-4.png"
import image_5 from "../../images/cards/image-5.png"
import image_6 from "../../images/cards/image-6.png"
import image_7 from "../../images/cards/image-7.png"
import image_8 from "../../images/cards/image-8.png"
import image_9 from "../../images/cards/image-9.png"
import image_10 from "../../images/cards/image-10.png"
import image_11 from "../../images/cards/image-11.png"
import image_12 from "../../images/cards/image-12.png"

import React from "react";
import "../MovieCardsLists/movieCardsLists.css";
import MoviesCard from "../MovieCards/MovieCards";

function MovieCardsLists(props) {
    return (
        <section className="movieCardsLists">
            <div className="movieCardsLists__elements">
                <MoviesCard
                    picture={image_1}
                    title={"В погоне за Бенкси"}
                    duration={"27 минут"}
                />
                <MoviesCard
                    picture={image_2}
                    title={"В погоне за Бенкси"}
                    duration={"27 минут"}
                />
                <MoviesCard
                    picture={image_3}
                    title={"В погоне за Бенкси"}
                    duration={"27 минут"}
                />
                <MoviesCard
                    picture={image_4}
                    title={"В погоне за Бенкси"}
                    duration={"27 минут"}
                />
                <MoviesCard
                    picture={image_5}
                    title={"В погоне за Бенкси"}
                    duration={"27 минут"}
                />
                <MoviesCard
                    picture={image_6}
                    title={"В погоне за Бенкси"}
                    duration={"27 минут"}
                />
                <MoviesCard
                    picture={image_7}
                    title={"В погоне за Бенкси"}
                    duration={"27 минут"}
                />
                <MoviesCard
                    picture={image_8}
                    title={"В погоне за Бенкси"}
                    duration={"27 минут"}
                />
                <MoviesCard
                    picture={image_9}
                    title={"В погоне за Бенкси"}
                    duration={"27 минут"}
                />
                <MoviesCard
                    picture={image_10}
                    title={"В погоне за Бенкси"}
                    duration={"27 минут"}
                />
                <MoviesCard
                    picture={image_11}
                    title={"В погоне за Бенкси"}
                    duration={"27 минут"}
                />
                <MoviesCard
                    picture={image_12}
                    title={"В погоне за Бенкси"}
                    duration={"27 минут"}
                />
            </div>
        </section>
    )
}

export default MovieCardsLists;
