import React from 'react';
import {Link,BrowserRouter as Router} from "react-router-dom";
import "./nav.scss";
import About from '../About/About';
import Work from '../Work/Work';
const Nav = () => {

    return (
        
        <nav>
            <ul className="nav-container">
            <Router>
                <li> <Link to={"/"} >Home</Link><div className="dot"></div></li>
                <li> <Link to={About()} >About</Link><div className="dot"></div></li>
                <li> <Link to={Work()} >Work</Link><div className="dot"></div></li>
                <li> <a href="#">Contact</a><div className="dot"></div></li>
            </Router>

            </ul>
        </nav>
    )
}

export default Nav
