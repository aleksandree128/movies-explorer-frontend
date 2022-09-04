import React from "react";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Technologies from "../Technologies/Technologies";
import AboutMe from "../AboutMe/AboutMe";
import InfoTooltip from '../InfoTooltip/InfoTooltip';

function Main(props) {
    return (
        <main>
            <InfoTooltip/>
            <Promo />
            <AboutProject />
            <Technologies />
            <AboutMe />
        </main>
    );
}

export default Main;
