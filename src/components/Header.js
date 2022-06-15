import React from "react";
import "../scss/header.scss"
import logo from "../images/logo.jpg"
import { Link } from "react-router-dom";


function Header() {
    return (
        <header id="header">
            <div className="container">
                <div className="logo">
                    <Link to="/"> <img src={logo} alt="na logo widzimy szczęśliwą świnkę z balonikiem w kształcie serca"/> </Link>

                </div>
                <div className="nav">
                    <ul className="navbar">
                        <li className="navbar__item"><Link to="/"> Home </Link></li>
                        <li className="navbar__item"><Link to="/about"> About us </Link></li>
                        <li className="navbar__item"><Link to="/menu"> Menu </Link></li>
                        <li className="navbar__item"><Link to="/contact"> Contact </Link></li>
                    </ul>

                </div>

            </div>
        </header>
    )
}
export default Header;