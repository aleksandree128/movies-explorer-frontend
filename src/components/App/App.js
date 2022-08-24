import { Routes, Route, useLocation } from "react-router-dom";
import React from 'react';
import Login from "../Login/Login.js";
import Register from "../Registr/Registr.js";
import NotFound from "../NotFound/NotFound.js";
import Profile from "../Profile/Profile";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movie from "../Movie/Movie";
import SavedMovies from "../SavedMovies/SavedMovies";

function App() {
    const { pathname } = useLocation();

    return (
        <div className="App">

            <Routes>

                <Route
                    exact path="/"
                    element={<Main/>}>
                </Route>

                <Route path="/signup"
                       element={<Register />}>
                </Route>

                <Route path="/signin"
                       element={<Login />}>
                </Route>

                <Route path="*"
                       element={<NotFound />}>
                </Route>

                <Route path="/movies"
                       element={<Movie />}>
                </Route>

                <Route path="/saved-movies"
                       element={<SavedMovies />} exact>
                </Route>

                <Route path="/profile"
                       element={<Profile />}>
                </Route>
            </Routes>

            {pathname === "/" ||
            pathname === "/movies" ||
            pathname === "/saved-movies" ? (
                <Footer />
            ) : (
                ""
            )}
        </div>
    )
}

export default App;
