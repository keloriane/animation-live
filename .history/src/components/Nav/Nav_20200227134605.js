import React from 'react';
import {Link,BrowserRouter as Router} from "react-router-dom";
import Home from "./../../views/Home";
import Work from './../Work/Work';
import "./nav.scss";
const Nav = () => {

    return (
        
        <nav>
            <ul className="nav-container">
            <Router>
                <li> <Link to={Home()} >Home</Link><div className="dot"></div></li>
                <li> <a >About</a><div className="dot"></div></li>
                <li> <Link to={Work()}>Work</Link><div className="dot"></div></li>
                <li> <a href="#">Contact</a><div className="dot"></div></li>
            </Router>

            </ul>
        </nav>
    )
}

export default Nav
