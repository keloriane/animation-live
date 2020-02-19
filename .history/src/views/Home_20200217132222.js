import React,{useEffect, useState} from 'react';
import Nav from './../components/Nav/Nav';
import "./assets/Home.scss";
import gsap,{Power4} from 'gsap';

const Home = () => {


    useEffect(()=> {
        
        
        const squares = document.querySelectorAll('.square')
        const titleWrapper = document.querySelector('.title')
        const tl = gsap.timeline()
        tl
        .from(titleWrapper, .6, {x:"-100%",width: 0,delay:0.5, ease: Power4.easeInOut})
        .staggerFrom(squares, 1,{rotationY:90, },0.1)
    },[])
    return (
        <div id="main-home">
            <Nav/>  
            <div className="board-animation">
                <div className="wrapper">
                <div className="title">
                    <div className="square">
                        <div className="typo">
                            <h3>H</h3>
                        </div>
                    </div>
                    <div className="square">
                        <div className="typo">
                            <h3>E</h3>
                        </div>
                    </div>
                    <div className="square">
                        <div className="typo">
                            <h3>L</h3>
                        </div>
                    </div>
                    <div className="square">
                        <div className="typo">
                            <h3>L</h3>
                        </div>
                    </div>
                    <div className="square">
                        <div className="typo">
                            <h3>O</h3>
                        </div>
                    </div>
                    <div className="square">
                        <div className="typo">
                            <h3 className="dot">.</h3>
                        </div>
                    </div>
                </div>
                    </div>   

            </div>
                    squares>letters
                       squares>letters
                    board-bgImage

        </div>
    )
}

export default Home
