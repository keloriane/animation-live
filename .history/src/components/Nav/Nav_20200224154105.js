import React from 'react'
import "./nav.scss";
const Nav = () => {
    return (
        <nav>
            <ul className="nav-container">
                <li> <p >Home</p>  <div className="dot"></div></li>
                <li> <p >About</p> <div className="dot"></div></li>
                <li> <p>Work</p>   <div className="dot"></div></li>
                <li> <p>Contact</p><div className="dot"></div></li>

            </ul>
        </nav>
    )
}

export default Nav
