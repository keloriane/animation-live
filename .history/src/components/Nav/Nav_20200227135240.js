import React from 'react';
import {NavLink,BrowserRouter as Router} from "react-router-dom";
import "./nav.scss";
const Nav = () => {

    return (
        
        <nav>
            <ul className="nav-container">
            <Router>
                <li> <NavLink to="/" >Home</NavLink><div className="dot"></div></li>
                <li> <a >About</a><div className="dot"></div></li>
                <li> <NavLink to="/work">Work</NavLink><div className="dot"></div></li>
                <li> <a href="#">Contact</a><div className="dot"></div></li>
            </Router>

            </ul>
        </nav>
    )
}

export default Nav
