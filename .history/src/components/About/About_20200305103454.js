import React from 'react';
import Title from './../Title/Title';
import "./about.scss"

const About = () => {
    return (
        <>
        <div className="main-about">

        <div className="about-container">
           
            <div className="wrapper-about">
                <div className="info-content">

                <div className="text-container">
            <Title name="About"/>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="image-nav-container">
                    <div className="image-nav">
                        <div className="main-nav">
                            <img src="./assets/img/omismo.png   " alt=""/>
                            <div className="navigation">
                                 <ul>
                                    <li>Eperiences</li>
                                    <li>|</li>
                                    <li>Skills </li>
                                    <li>|</li>
                                    <li>Me </li>
                                    
                                </ul> 
                            </div>
                        </div>

                    </div>
                </div>
                </div>
            </div>
            
        </div>
        </div>
        </>
    )
}

export default About
