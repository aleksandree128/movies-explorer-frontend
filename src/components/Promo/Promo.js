import React from "react";
import promoImage from "../../images/promo_lable.svg";
import "../Promo/promo.css";

function Promo(props) {
    return (
        <section className="promo">
            <div className="promo__container">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                <img className="promo__image" src={promoImage} alt="промо картинка" />
            </div>
        </section>
    );
}

export default Promo;
