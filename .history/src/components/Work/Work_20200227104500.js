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
                    <div className="previous">
                        <button className="button button--previous"></button>
                    </div>
                    <div className="next">
                        <button className="button button--next"></button>

                    </div>
                </div>
                .
            </div>
        </div>
    )
}
export default Work ;