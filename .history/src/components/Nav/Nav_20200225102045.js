import React from 'react'
import "./nav.scss";
const Nav = () => {
    return (
        <nav>
            <ul className="nav-container">
                <li> <a href="#" >Home</a><div className="dot"></div></li>
                <li> <a href="#" >About</a><div className="dot"></div></li>
                <li> <a href="#">Work</a><div className="dot"></div></li>
                <li> <a href="#">Contact</a><div className="dot"></div></li>

            </ul>
        </nav>
    )
}

export default Nav
