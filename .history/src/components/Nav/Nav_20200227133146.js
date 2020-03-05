import React from 'react';
import {Link} from "react-router-dom";
import "./nav.scss";
const Nav = () => {
    return (
        <nav>
            <ul className="nav-container">
                <li> <a href="#" >Home</a><div className="dot"></div></li>
                <li> <a href="#" >About</a><div className="dot"></div></li>
                <li> <Link to="/work">Work</Link><div className="dot"></div></li>
                <li> <a href="#">Contact</a><div className="dot"></div></li>

            </ul>
        </nav>
    )
}

export default Nav
