import React,{useEffect} from 'react'
import gsap from 'gsap'
import "./Work.scss";
import Title from './../Title/Title';
export const Work = () => {
  
    return (
        <div className="works">
            <div className="work--container">

                <Title name="Omismo" />
                <div className="work--navigation">
                    <div className="previous"></div>
                    <div className="next"></div>
                </div>
            </div>
        </div>
    )
}
export default Work ;