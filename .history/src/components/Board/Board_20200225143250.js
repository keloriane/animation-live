import React, {useEffect} from "react";
import gsap from 'gsap';
import Rellax from 'rellax'
import Border from "../Border/Border";


const Board = () => {
    const tl = gsap.timeline();
    
    useEffect(()=>{
        const letter = document.querySelectorAll('.letter-title');
        const titleBackground = document.querySelectorAll('.title');
        const mountain = document.querySelector('.mountain-view');
        console.log(titleBackground);


        tl
        .staggerFrom(titleBackground,.5,{x:"-150%", ease:"sin.out"},0.5)
        .staggerFrom(letter,.2,{y:100,ease:"sin.out( 1.7)"},0.06)
        .from(mountain,1,{x:"120%",delay:-.7})
        .to(mountain,5,{scale:1.3,delay:-.8});


    const rellax = new Rellax('.parallax',{
        speed: -3,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });

    })

    const handleClick = (e) => {
        e.preventDefault();
        if(tl.reversed()){
            tl.play()
        }else{
            tl.reverse()
        }
    }
    return (

        <div className="board-animation">
            <div className="title-container">

                <div className="title">
                    <div className="square">
                        <div className="typo">
                            <h3 className="letter-title">K</h3>
                        </div>
                    </div>
                    <div className="square">
                        <div className="typo">
                            <h3 className="letter-title">E</h3>
                        </div>
                    </div>
                    <div className="square">
                        <div className="typo">
                            <h3 className="letter-title">V</h3>
                        </div>
                    </div>
                    <div className="square">
                        <div className="typo">
                            <h3 className="letter-title">I</h3>
                        </div>
                    </div>
                    <div className="square">
                        <div className="typo">
                            <h3 className="letter-title">N</h3>
                        </div>
                    </div>
                    <div className="square">
                        <div className="typo">
                            <h3 className="dot letter-title">.</h3>
                        </div>
                    </div>

                </div>
                <div className="title lastName">
                    <div className="square">
                        <div className="typo">
                            <h3 className="letter-title">F</h3>
                        </div>
                    </div>
                    <div className="square">
                        <div className="typo">
                            <h3 className="letter-title">L</h3>
                        </div>
                    </div>
                    <div className="square">
                        <div className="typo">
                            <h3 className="letter-title">A</h3>
                        </div>
                    </div>
                    <div className="square">
                        <div className="typo">
                            <h3 className="letter-title">B</h3>
                        </div>
                    </div>
                    <div className="square">
                        <div className="typo">
                            <h3 className="letter-title">A</h3>
                        </div>
                    </div>
                    <div className="square">
                        <div className="typo">
                            <h3 className=" letter-title">T</h3>
                        </div>
                    </div>
                    <div className="square">
                        <div className="typo">
                            <h3 className="dot letter-title">.</h3>
                        </div>
                    </div>
                </div>
                <div className="functions">
                    <h4 className="skills-name">Front end developer</h4>
                    <h4 className="skills-name design">UX/UI Designer</h4>
                </div>
            </div>

            <div className="image-container">

                <img className="mountain-view  " src="./assets/img/mountain.webp" alt="" />
            </div>
        </div>





    )
}
export default Board;