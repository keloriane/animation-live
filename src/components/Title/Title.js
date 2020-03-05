import React,{useEffect} from 'react';
import gsap from 'gsap';
const tl = gsap.timeline();
const Title = props => {
    useEffect(()=> {
        const titleBackground = document.querySelectorAll('.title');
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
            newLetter.map(letter => {
                titleArray.push(letter);
            });
        }); 
        let chars = document.querySelectorAll('.chars')
        tl
        .staggerFrom(titleBackground,.5,{x:"-150%", ease:"sin.out"},0.5)
        .staggerFrom(chars,.3,{y:100,ease:"sin.out( 1.7)"},0.04)
    })
    return (
        <div className="title-container">
            <div className="title">
                <h3 className="text-letter">{props.name}</h3> 
            </div>
        </div>
    )
};
export default Title;
