import React from "react";
import "../Navigation/navigation.css";
import icon from "../../images/icon__user.svg";
import { Link, NavLink } from "react-router-dom";

function Navigation(props) {
    const [showMenu, setShowMenu] = React.useState(false);
    const handleToggleMenu = () => setShowMenu(!showMenu);
    return (
        <nav className="navigation">
            <button className="navigation__burger" type="button" onClick={handleToggleMenu}>
            </button>
            <div className={`navigation__container ${showMenu ? "navigation__container_visible" : ""}`}>
                <div className="navigation__slider">
                    <button className="navigation__close" type="button" onClick={handleToggleMenu}></button>
                    <ul className="navigation__lists">
                        <li className="navigation__list navigation__element_type_main">
                            <Link to="/" className="navigation__link" activeClassName="navigation__link_active">
                                Главная
                            </Link>
                        </li>
                        <li className="navigation__list navigation__lists_type-main">
                            <Link to="/movies" className="navigation__link" activeClassName="navigation__link_active">
                                Фильмы
                            </Link>
                        </li>
                        <li className="navigation__list navigation__lists_type-main">
                            <Link to="/saved-movies" className="navigation__link" activeClassName="navigation__link_active">
                                Сохраненный фильмы
                            </Link>
                        </li>
                    </ul>
                    <NavLink to="/profile" className="navigation__profile">
                        Аккаунт
                        <img className="navigation__profile-img" src={icon} alt="Аккаунт"/>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;
