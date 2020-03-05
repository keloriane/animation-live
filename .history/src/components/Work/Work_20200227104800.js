import React,{useEffect} from 'react'
import gsap from 'gsap'
import "./Work.scss";
import Title from './../Title/Title';
export const Work = () => {
  
    return (
        <div className="works">
            <div className="work--container">
                <div className="inner--left--container">
                    <Title name="Omismo" />
                    <div className="work--navigation">
                        <div className="previous">
                            <button className="button button--previous"> Next </button>
                        </div>
                        <div className="next">
                            <button className="button button--next">Previous</button>
                        </div>
                    </div>
                <div className="breadcrumbs">
                    <p>1/2</p>
                </div>
            </div>

        </div>
    </div>
    )
}
export default Work ;