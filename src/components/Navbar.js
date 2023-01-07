import React from "react";
import './Navbar.css';

export function Navbar({children}) {
    return <h1 className="nav">{children}</h1>;
}