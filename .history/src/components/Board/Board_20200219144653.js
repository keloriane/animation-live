import React, {useEffect} from "react";
import gsap from 'gsap';


const Board = () => {
    useEffect(()=>{
        const letter = document.querySelectorAll('.letter-title');
        const titleBackground = document.querySelector('.title');
        console.log(titleBackground);
        const timeline = gsap.timeline();


        timeline
        .from(titleBackground,4,{x:"-100%", ease:CustomEase.create("custom","M0,0 C0,0 0.01733,0.02327 0.03006,0.0305 0.04935,0.04145 0.06756,0.04848 0.09135,0.05186 0.20472,0.06798 0.28091,0.06666 0.39917,0.08298 0.45692,0.09096 0.4927,0.09804 0.54689,0.11475 0.59122,0.12842 0.62097,0.14069 0.66047,0.16356 0.69862,0.18565 0.72525,0.2057 0.75567,0.23565 0.77504,0.25472 0.78652,0.27371 0.7979,0.29887 0.81287,0.33199 0.82145,0.35716 0.82746,0.39448 0.85114,0.54135 0.85438,0.6337 0.87632,0.78538 0.88269,0.82938 0.88667,0.85771 0.90019,0.89715 0.91054,0.92731 0.92412,0.94978 0.94114,0.97441 0.94718,0.98315 0.95634,0.98843 0.96621,0.99272 0.9772,0.9975 1,1 1,1 ")})
        .staggerFrom(letter,2,{y:200,ease:"elastic.out( 1.7)"},.2)

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