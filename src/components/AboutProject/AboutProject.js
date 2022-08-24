import React from "react";
import "../AboutProject/aboutProject.css"

function AboutProject(props) {
    return (
        <section className="aboutProject">
            <h2 className="aboutProject__title">О проекте</h2>

            <div className="aboutProject__container">
                <div className="aboutProject__column">
                    <h3 className="aboutProject__subtitle">Дипломный проект включал 5 этапов</h3>
                    <p className="aboutProject__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="aboutProject__column">
                    <h3 className="aboutProject__subtitle">На выполнение диплома ушло 5 недель</h3>
                    <p className="aboutProject__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>

            <div className="aboutProject__time">
                <div className="aboutProject__column-time">
                    <div className="aboutProject__backend-period">1 неделя</div>
                    <p className="aboutProject__backend-text">Back-end</p>
                </div>
                <div className="aboutProject__column-time">
                    <div className="aboutProject__frontend-period">4 недели</div>
                    <p className="aboutProject__frontend-text">Front-end</p>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;
