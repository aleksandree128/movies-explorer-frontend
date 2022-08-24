import React from 'react';
import "../Footer/footer.css";

function Footer(props) {
    return (
        <footer className="footer">

            <div className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</div>

            <div className="footer__bottom">
                <p className="footer__copyright">&#169; 2022</p>
                <div className="footer__links">
                    <a className="footer__link" href="https://practicum.yandex.ru" target="blank">Яндекс.Практикум</a>
                    <a className="footer__link" href="https://github.com" target="blank">Github</a>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
