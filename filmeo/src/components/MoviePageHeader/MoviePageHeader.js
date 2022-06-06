import React from "react";
import Logo from "../../assets/images/logo.png";
import { Header } from "../../assets/styles/Movies/MovieHeaderStyle";

const MoviePageHeader = () => {
    return (
        <Header>
            <div>
                <img src={Logo} onClick={() => window.scrollTo(0, 0)} alt="Filmeo logo" />
            </div>
        </Header>
    )
};

export default MoviePageHeader;