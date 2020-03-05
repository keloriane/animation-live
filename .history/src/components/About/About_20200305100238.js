import React from 'react';
import Title from './../Title/Title';

const About = () => {
    return (
        <div className="about-container">
            <Title name="About"/>
            <Title name="me"/>
            <div className="wrapper-about">
                <div className="text-conatainer">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="image-nav-container">
                    <div className="image-nav">
                        <div>
                            <img src="" alt=""/>
                            <nav>
                                 <ul>
                                    <li>Eperiences</li>
                                    <li>Skills</li>
                                    <li>Me :-)</li>
                                </ul> 
                            </nav>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default About
