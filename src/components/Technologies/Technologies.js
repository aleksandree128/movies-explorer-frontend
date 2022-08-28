import React from "react";
import "../Technologies/technologies.css";

function Technologies(props) {
    return (
        <section className="technologies">
            <h2 className="technologies__title">Технологии</h2>
            <h3 className="technologies__subtitle">7 технологий</h3>
            <p className="technologies__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте</p>
            <ul className="technologies__lists">
                <li className="technologies__list">HTML</li>
                <li className="technologies__list">CSS</li>
                <li className="technologies__list">JS</li>
                <li className="technologies__list">React</li>
                <li className="technologies__list">Git</li>
                <li className="technologies__list">Express.js</li>
                <li className="technologies__list">mongoDB</li>
            </ul>
        </section>
    );
}

export default Technologies;
