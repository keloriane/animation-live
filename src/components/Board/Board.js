import React, {useEffect} from "react";
import gsap from 'gsap';


const Board = () => {

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
            <button onClick={handleClick}>More</button>
</div>
    )
};
export default Board;