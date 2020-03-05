import React from 'react';
import Title from './../Title/Title';

const About = () => {
    return (
        <div className="about-container">
            <Title name="About"/>
            <Title name="me"/>
            <div className="wrapper-about">
                <div className="text-conatainer">

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
