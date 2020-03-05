import React,{useEffect} from 'react';
import "./assets/Home.scss";
import gsap from 'gsap';
import Board from './../components/Board/Board';
import Nav from "../components/Nav/Nav";

const Home = () => {

useEffect(()=> {
    const imageWrapper = document.getElementsByClassName('umbrella');
    const textContainer = document.getElementsByClassName('text-container');


    const sectionTL = gsap.timeline();
    sectionTL
        .from(imageWrapper,1,{ x:"100%", ease:"power0.back" })
        .from(textContainer,1,{ opacity:0, ease:"power0.back" })
})

    return (
        <div id="main-home">

            
            

            <div className="container">

                <Board />

            </div>

            
            
        </div>
    )
}

export default Home
