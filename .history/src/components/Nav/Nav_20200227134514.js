import React from 'react';
import {Link,BrowserRouter as Router} from "react-router-dom";
import Home from "./../../views/Home";
import Work from './../Work/Work';
import "./nav.scss";
const Nav = () => {

    return (
        <Router>

        <nav>
            <ul className="nav-container">
                <li> <Link to={Home()} >Home</Link><div className="dot"></div></li>
                <li> < >About</a><div className="dot"></div></li>
                <li> <Link to={Work()}>Work</Link><div className="dot"></div></li>
                <li> <a href="#">Contact</a><div className="dot"></div></li>

            </ul>
        </nav>
        </Router>
    )
}

export default Nav
