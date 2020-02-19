import React, {useEffect} from "react";
import gsap from 'gsap';


const Board = () => {
    const tl = gsap.timeline();
    
    useEffect(()=>{
        const letter = document.querySelectorAll('.letter-title');
        const titleBackground = document.querySelector('.title');
        const mountain = document.querySelector('.mountain-view');
        console.log(titleBackground);


        tl
        .from(titleBackground,1,{x:"-100%", ease:"back.out"})
        .staggerFrom(letter,.5,{y:100,ease:"back.out( 1.7)"},0.05)
        .from(mountain,1,{x:"120%",delay:-.7})

    })
    return (
<div>
        <div className="board-animation">

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

            <div className="image-container">
                <div className="blur-layer"></div>
                <img className="mountain-view" src="./assets/img/mountain.webp" alt=""/>
            </div>
        </div>
            <button>More</button>
</div>
    )
}
export default Board;