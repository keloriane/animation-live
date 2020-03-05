import React,{useEffect} from 'react'
import gsap from 'gsap'
import "./Work.scss";
import Title from './../Title/Title';
export const Work = () => {
  
    return (
        <section className="works">
            <div className="folio">
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
            <div className="inner--right--container">
                <div className="slider--work">
                    <div className="image--wrapper">
                        <img src="./img/omismo.png" alt=""/>
                        <div className="details--button">
                            <button className="details"> 
                                
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            </div>

        </div>
    </section>
    )
}
export default Work ;