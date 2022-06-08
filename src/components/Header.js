import React from "react";
import "../scss/header.scss"
import logo from "../images/logo.jpg"


function Header() {
    return (
        <header id="header">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="nav">
                    <ul className="navbar">
                        <li className="navbar__item"><a href="#"> Home </a></li>
                        <li className="navbar__item"><a href="#"> About us </a></li>
                        <li className="navbar__item"><a href="#"> Contact </a></li>
                        <li className="navbar__item"><a href="#"> Menu </a></li>
                    </ul>

                </div>

            </div>
        </header>
    )
}
export default Header;