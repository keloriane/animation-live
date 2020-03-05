import React,{useEffect} from 'react'
import gsap from 'gsap'
import "./Work.scss";
import Title from './../Title/Title';
export const Work = () => {
    useEffect(()=> {
        const titleTl = gsap.timeline()

        titleTl
        .staggerFrom(titleBackground,.5,{x:"-150%", ease:"sin.out"},0.5)
        .staggerFrom(chars,.3,{y:100,ease:"sin.out( 1.7)"},0.04)
    })
    return (
        <div className="works">
            <div className="work--container">
                <Title name="Omismo" />
            </div>
        </div>
    )
}
export default Work ;