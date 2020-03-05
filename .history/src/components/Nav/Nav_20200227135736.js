import React from 'react';
import {Link,BrowserRouter as Router} from "react-router-dom";
import "./nav.scss";
const Nav = () => {

    return (
        
        <nav>
            <ul className="nav-container">
            <Router>
                <li> <Link to="/" >Home</Link><div className="dot"></div></li>
                <li> <a >About</a><div className="dot"></div></li>
                <li> <Link to="/work">Work</Link><div className="dot"></div></li>
                <li> <a href="#">Contact</a><div className="dot"></div></li>
            </Router>

            </ul>
        </nav>
    )
}

export default Nav
