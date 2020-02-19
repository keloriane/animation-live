import React,{useEffect} from 'react';
import Nav from './../components/Nav/Nav';
import "./assets/Home.scss";
import gsap from 'gsap';
import Board from './../components/Board/Board';
import Cursor from './../components/Cursor/Cursor'
const Home = () => {



    return (
        <div id="main-home">
            <Cursor/>
            <Nav/>  
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
