import React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";
import Login from "../Login/Login.js";
import Register from "../Registr/Registr";
import NotFound from "../NotFound/NotFound.js";
import SavedMovies from "../SavedMovies/SavedMovies";
import Movies from "../Movie/Movie";
import Profile from "../Profile/Profile";
import { mainApi } from "../../utils/MainApi.js";
import InfoTooltip from "../InfoTooltip/InfoTooltip.js";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";

function App() {
    const { pathname } = useLocation();
    const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
    const [message, setMessage] = useState({ successful: false, message: "" });
    const [loggedIn, setLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const [savedMoviesList, setSavedMoviesList] = React.useState([]);

    function handleRegistration({ name, password, email }) {
        mainApi
            .registration({ name, password, email })
            .then((res) => {
                if (res._id) {
                    handleSignIn({ email, password });
                }
            })
            .catch((err) => {
                setIsInfoTooltipOpen(true);
                setMessage({
                    successful: false,
                    message: "Пользователь с таким email уже существует.",
                });
            });
    }

    useEffect(() => {
        if (loggedIn) {
            mainApi
                .getUserData()
                .then((res) => {
                    setCurrentUser(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [loggedIn]);

    function handleLogin() {
        setLoggedIn(true);
        checkToken();
    }

    function checkToken() {
        if (localStorage.getItem("jwt")) {
            const jwt = localStorage.getItem("jwt");
            if (jwt) {
                mainApi
                    .getUserData(jwt)
                    .then((data) => {
                        if (data) {
                            setLoggedIn(true);
                            navigate("/movies");
                            setCurrentUser(data);
                        }
                    })
                    .catch((err) => console.log(err));
            }
        }
    }

    useEffect(() => {
        const jwt = localStorage.getItem("jwt");
        if (jwt) {
            mainApi
                .getUserData()
                .then((data) => {
                    if (data) {
                        setLoggedIn(true);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [navigate]);

    function handleSignIn({ email, password }) {
        mainApi
            .login({ email, password })
            .then((data) => {
                if (data.token) {
                    localStorage.setItem("jwt", data.token);
                    handleLogin();
                    navigate("/movies");
                }
            })
            .catch((err) => {
                setErrorMessage(err.toString());
            });
    }

    function closeInfoTooltip() {
        setIsInfoTooltipOpen(false);
    }

    function handleSignOut() {
        setCurrentUser({});
        setLoggedIn(false);
        localStorage.removeItem("jwt");
        navigate("/");
    }

    function handleUpdateUser(info) {
        mainApi
            .editProfile(info)
            .then((res) => {
                setCurrentUser(res);
                setIsInfoTooltipOpen(true);
                setMessage({
                    successful: true,
                    message: "Данные профиля успешно изменены.",
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function handleSaveMovie(movie) {
        mainApi
            .addMovie(movie)
            .then((newMovie) => {
                setSavedMoviesList([newMovie, ...savedMoviesList]);
            })
            .catch(() => {
                setIsInfoTooltipOpen(true);
                setMessage({
                    successful: false,
                    message: "Что-то пошло не так",
                });
            });
    }

    function handleDeleteMovie(movie) {
        const savedMovie = savedMoviesList.find((item) => {
            if (item.movieId === movie.id || item.movieId === movie.movieId) {
                return item;
            } else {
                return savedMoviesList;
            }
        });
        mainApi
            .deleteMovie(savedMovie._id)
            .then(() => {
                const newMoviesList = savedMoviesList.filter((m) => {
                    if (movie.id === m.movieId || movie.movieId === m.movieId) {
                        return false;
                    } else {
                        return true;
                    }
                });
                setSavedMoviesList(newMoviesList);
            })
            .catch(() => {
                setIsInfoTooltipOpen(true);
                setMessage({
                    successful: false,
                    message: "Что-то пошло не так",
                });
            });
    }

    React.useEffect(() => {
        if (loggedIn) {
            mainApi
                .getMovies()
                .then((data) => {
                    setSavedMoviesList(data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [loggedIn]);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <>
                <div className="App">
                    {pathname === "/" ||
                    pathname === "/movies" ||
                    pathname === "/saved-movies" ||
                    pathname === "/profile" ? (
                        <Header loggedIn={loggedIn} />
                    ) : (
                        ""
                    )}

                    <Routes>
                        <Route exact path="/" element={<Main />}></Route>

                        <Route
                            path="/signup"
                            element={
                                <Register
                                    onSignUp={handleRegistration}
                                    errorMessage={errorMessage}
                                />
                            }
                        ></Route>

                        <Route
                            path="/signin"
                            element={
                                <Login
                                    onSignIn={handleSignIn}
                                    errorMessage={errorMessage}
                                />
                            }
                        ></Route>

                        <Route path="*" element={<NotFound />}></Route>

                        <Route
                            element={
                                <ProtectedRoute
                                    loggedIn={loggedIn}
                                    redirectPath="/"
                                />
                            }
                        >
                            <Route
                                path="/movies"
                                element={
                                    <Movies
                                        user={currentUser}
                                        onSavedMovie={savedMoviesList}
                                        onSaveClick={handleSaveMovie}
                                        onDeleteClick={handleDeleteMovie}
                                    />
                                }
                            />

                            <Route
                                path="/saved-movies"
                                element={
                                    <SavedMovies
                                        loggedIn={loggedIn}
                                        user={currentUser}
                                        savedMoviesList={savedMoviesList}
                                        onDeleteClick={handleDeleteMovie}
                                    />
                                }
                            ></Route>

                            <Route
                                path="/profile"
                                element={
                                    <Profile
                                        onUpdateUser={handleUpdateUser}
                                        onSignOut={handleSignOut}
                                    />
                                }
                            ></Route>
                        </Route>
                    </Routes>

                    {pathname === "/" ||
                    pathname === "/movies" ||
                    pathname === "/saved-movies" ? (
                        <Footer />
                    ) : (
                        ""
                    )}
                    <InfoTooltip
                        isOpen={isInfoTooltipOpen}
                        onClose={closeInfoTooltip}
                        message={message.message}
                        successful={message.successful}
                    />
                </div>
            </>
        </CurrentUserContext.Provider>
    );
}

export default App;
