import React, {useEffect} from "react";
import gsap from 'gsap';
import Rellax from 'rellax'
import Border from "../Border/Border";
import Image from './Image';
import Title from './../Title/Title';
const Board = (props) => {
    const tl = gsap.timeline();
    
    useEffect(()=>{
        const letter = document.querySelectorAll('.letter-title');
        const titleBackground = document.querySelectorAll('.title');
        const mountain = document.querySelector('.mountain-view');
        console.log(titleBackground);

        
        // Split each word from a tag
        let titleArray = [];
        
        function splitWord(word) {
            return [...word]
            .map(letter => `<span class="chars">${letter}</span>`)
            .join("");
        }
        const words = [...document.querySelectorAll(".text-letter")];
        words.map(word => {
            word.innerHTML = splitWord(word.textContent);
            const newLetter = [...word.querySelectorAll(".chars")];
            console.log(newLetter);
            newLetter.map(letter => {
                console.log(letter);
                titleArray.push(letter);
                console.log(titleArray);
            });
        }); // .from(titleList, 1, { y: "-100%", delay: -2 });
        
        let chars = document.querySelectorAll('.chars')
        // gsap.to(chars, 1, { y: "100%" });
        tl
        .staggerFrom(titleBackground,.5,{x:"-150%", ease:"sin.out"},0.5)
        .staggerFrom(chars,.3,{y:70,ease:"sin.out( 1.7)"},0.04)
        .from(mountain,1,{x:"120%",delay:-.7})
        .to(mountain,5,{scale:1.3,delay:-.8});



    },[])



  
       


    const handleClick = (e) => {
        e.preventDefault();
        if(tl.reversed()){
            tl.play()
        }else{
            tl.reverse()
        }
    }
    return (
<>
        <div className="board-animation">
            <div className="title-container">

               <Title name="Kevin" className="title" />
               <Title name="Kevin" className="title lastName" />
                <div className="functions">
                    <h4 className="skills-name">Front end developer</h4>
                    <h4 className="skills-name design">UX/UI Designer</h4>
                </div>
            </div>
            <Image image={"https://images.unsplash.com/photo-1520065786657-b71a007dd8a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"} />
           
        </div>

<button type="submit" onClick={handleClick}></button>
</>



    )
}
export default Board;