import React from "react";
import "../Profile/profile.css";
import { CurrentUserContext } from "../../context/CurrentUserContext";

function Profile({ onUpdateUser, onSignOut }) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState(currentUser.name);
    const [email, setEmail] = React.useState(currentUser.email);
    const [initialName, setInitialName] = React.useState(currentUser.name);
    const [initialEmail, setInitialEmail] = React.useState(currentUser.email);
    const [activeButton, setActiveButton] = React.useState(false);

    function handleChangeName(e) {
        setName(e.target.value);
        if (e.target.value !== initialName) {
            setActiveButton(true);
        } else {
            setActiveButton(false);
        }
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
        if (e.target.value !== initialEmail) {
            setActiveButton(true);
        } else {
            setActiveButton(false);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        setActiveButton(false);
        onUpdateUser({
            name: name,
            email: email,
        });
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
    }

    React.useEffect(() => {
        const localName = localStorage.getItem("name");
        if (localName) {
            setInitialName(localName);
        }
        const localEmail = localStorage.getItem("email");
        if (localEmail) {
            setInitialEmail(localEmail);
        }
    }, []);

    return (
        <section className="profile">
            <h2 className="profile__greeting">Привет, {name}!</h2>
            <form className="profile__user" onSubmit={handleSubmit}>
                <div className="profile__line">
                    <label className="profile__caption">Имя</label>
                    <input
                        className="profile__content"
                        value={name}
                        onChange={handleChangeName}
                        id="name"
                        required
                    ></input>
                </div>
                <div className="profile__line">
                    <label className="profile__caption">E-mail</label>
                    <input
                        className="profile__content"
                        value={email}
                        id="email"
                        onChange={handleChangeEmail}
                        required
                    ></input>
                </div>
                <button
                    className="profile__btn-update"
                    disabled={!activeButton}
                >
                    Редактировать
                </button>
            </form>
            <button onClick={onSignOut} className="profile__exit">
                Выйти из аккаунта
            </button>
        </section>
    );
}

export default Profile;
