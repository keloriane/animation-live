import React,{useEffect} from 'react';
import "./assets/Home.scss";
import gsap from 'gsap';
import Board from './../components/Board/Board';
import Cursor from './../components/Cursor/Cursor'
const Home = () => {

useEffect(()=> {
    const imageWrapper = document.getElementsByClassName('umbrella');
    const textContainer = document.getElementsByClassName('text-cotainer');

    gsap.from(imageWrapper,1,{ x:"100%", ease:"power0.back" })
    gsap.from(textContainer,1,{ opacity:0, ease:"power0.back" })
})

    return (
        <div id="main-home">
            <Cursor/>

            <div className="container">
                <Board />

            </div>
            <section className="about">
                <div className="text-container">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias corporis dicta, ea earum et facere fugiat, fugit iste modi, nihil nisi obcaecati repellendus ut velit voluptatem. Ipsum quasi reiciendis voluptates?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias corporis dicta, ea earum et facere fugiat, fugit iste modi, nihil nisi obcaecati repellendus ut velit voluptatem. Ipsum quasi reiciendis voluptates?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias corporis dicta, ea earum et facere fugiat, fugit iste modi, nihil nisi obcaecati repellendus ut velit voluptatem. Ipsum quasi reiciendis voluptates?</p>
                </div>
                <div className="c-image">
                    <img className="umbrella" src="https://images.unsplash.com/photo-1559782034-5fd0ada5f81b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                </div>
            </section>
            
                   

        </div>
    )
}

export default Home
