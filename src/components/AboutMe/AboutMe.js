import React from "react";
import "../AboutMe/aboutMe.css";
import photo from "../../images/avatar.jpg";
import link from "../../images/image__link.svg";

function AboutMe(props) {
    return (
        <section className="aboutMe">
            <h2 className="aboutMe__title">Студент</h2>
            <div className="aboutMe__container">
                <div className="aboutMe__info">
                    <h3 className="aboutMe__subtitle">Александр</h3>
                    <h4 className="aboutMe__profession">Фронтенд-разработчик, 24 года</h4>
                    <p className="aboutMe__text">
                        Я родился и живу в Оренбурге, закончил факультет математики и информационных технологий. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. После того, как прошёл курс по веб-разработке, начал
                        заниматься фриланс-заказами в свободное время.
                    </p>
                    <a className="aboutMe__link" href="https://github.com/aleksandree128" target="_blank">
                        Github
                    </a>
                </div>
                <img className="aboutMe__image" src={photo} alt="Аватар" />
            </div>
            <h5 className="aboutMe__portfolio">Портфолио</h5>
            <ul className="aboutMe__lists">
                <li className="aboutMe__list">
                    <a className="aboutMe__link" href="https://github.com/aleksandree128/how-to-learn" target="_blank">
                        Статичный сайт
                    </a>
                    <a className="aboutMe__photo-link" href="https://github.com/aleksandree128/how-to-learn" target="_blank"><img src={link} /></a>
                </li>
                <li className="aboutMe__list">
                    <a className="aboutMe__link" href="https://github.com/aleksandree128/russian-travel" target="_blank">
                        Адаптивный сайт
                    </a>
                    <a className="aboutMe__photo-link" href="https://github.com/aleksandree128/russian-travel" target="_blank"><img src={link} /></a>
                </li>
                <li className="aboutMe__list">
                    <a className="aboutMe__link" href="https://github.com/aleksandree128/react-mesto-api-full" target="_blank">
                        Одностраничное приложение
                    </a>
                    <a className="aboutMe__photo-link" href="https://github.com/aleksandree128/react-mesto-api-full" target="_blank"><img src={link} /></a>
                </li>
            </ul>
        </section>
    );
}

export default AboutMe;
