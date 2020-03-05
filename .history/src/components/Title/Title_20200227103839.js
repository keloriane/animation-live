import React,{useEffect} from 'react'
import gsap from 'gsap'


useEffect(()=> {
    const titleTl = gsap.timeline()

    titleTl
    .staggerFrom(titleBackground,.5,{x:"-150%", ease:"sin.out"},0.5)
    .staggerFrom(chars,.3,{y:100,ease:"sin.out( 1.7)"},0.04)
})

const Title = props => {
    return (
        <div className={props.classProp}>
            <h3 className="text-letter">{props.name}</h3> <div className="dot"></div>
        </div>
    )
};

export default Title
