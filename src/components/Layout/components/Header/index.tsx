import React, { FC } from "react";
import { NavBar } from "./components";

const Header: FC = () => {
    return (
        <header className="header">
            <NavBar />
        </header>
    );
};

export { Header };