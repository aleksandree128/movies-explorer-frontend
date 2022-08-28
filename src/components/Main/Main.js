import React from "react";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Technologies from "../Technologies/Technologies";
import AboutMe from "../AboutMe/AboutMe";
import Header from "../Header/Header";

function Main(props) {
    return (
        <main>
            <Header />
            <Promo />
            <AboutProject />
            <Technologies />
            <AboutMe />
        </main>
    );
}

export default Main;
