import React from 'react';
import {BrowserRouter as Router , Link} from "react-router-dom";
import "./nav.scss";
import About from './../About/About';
import Work from './../Work/Work';
const Nav = () => {

    return (
        
        <nav>
            <ul className="nav-container">
       
                <li> <Link to="/" >Home</Link><div className="dot"></div></li>
                <li> <Link to={()=> <About />} >About</Link><div className="dot"></div></li>
                <li> <Link to="/work" >Work</Link><div className="dot"></div></li>
                <li> <a href="#">Contact</a><div className="dot"></div></li>
         

            </ul>
        </nav>
    )
}

export default Nav
