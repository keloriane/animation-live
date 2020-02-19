import React,{useEffect, useState} from 'react';
import Nav from './../components/Nav/Nav';
import "./assets/Home.scss";
import gsap,{expo} from 'gsap';

const Home = () => {



    useEffect(()=> {
        const squares = document.querySelectorAll('.square')
        const letter = document.querySelectorAll('.letter-title')
        const titleWrapper = document.querySelector('.title')
        const tl = gsap.timeline()
        tl
        .from(titleWrapper, .6, {x:"-100%",delay:0.5, ease:"expo.inOut"})
        
        .staggerFrom(letter, .8,{y:100,  ease:"back.inOut(2.7)" },0.05)
        
    },[])
    
    return (
        <div id="main-home">
            <Nav/>  
            <div className="container">
                
            <div className="board-animation">
                <div className="wrapper">
                <div className="title">
                    <div className="square">
                        <div className="typo">
                            <h3 className="letter-title">H</h3>
                        </div>
                    </div>
                    <div className="square">
                        <div className="typo">
                            <h3 className="letter-title">E</h3>
                        </div>
                    </div>
                    <div className="square">
                        <div className="typo">
                            <h3 className="letter-title">L</h3>
                        </div>
                    </div>
                    <div className="square">
                        <div className="typo">
                            <h3 className="letter-title">L</h3>
                        </div>
                    </div>
                    <div className="square">
                        <div className="typo">
                            <h3 className="letter-title">O</h3>
                        </div>
                    </div>
                    <div className="square">
                        <div className="typo">
                            <h3 className="dot letter-title">.</h3>
                        </div>
                    </div>
                </div>
                    </div>   

            </div>
            </div>
            
                   

        </div>
    )
}

export default Home
