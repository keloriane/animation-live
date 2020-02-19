import React, { useEffect } from "react";
import gsap from "gsap";
import "./Cursor.scss";
const Cursor = () => {
    useEffect(() => {
        const page = document.getElementById('root');
        const cursor = document.getElementById('c-cursor');
        const innerCursor = document.getElementById('inner-cursor');
        const enterMouse = () => {
            gsap.from( innerCursor, 3,{ autoAlpha:0 })
        }
        const mouseLeave = () => {
            gsap.to( innerCursor, 3,{ autoAlpha:0 })
        }
        const mouseMove = (e) => {

            
            const mousePos = {
                x: e.clientX,
                y: e.clientY,
            }
            gsap.to(innerCursor, 1,{
                x:mousePos.x,
                y:mousePos.y
            })
            gsap.to(cursor, 0.5,{
                x:mousePos.x,
                y:mousePos.y
            })
        }
        page.addEventListener('mouseenter', enterMouse)
        page.addEventListener('mousemove', mouseMove);
        page.addEventListener('mouseleave', mouseLeave)
    },[])

    return (
        <div>
            <div id="c-cursor"></div>
            <div id="inner-cursor"></div>
        </div>
    )
}
export default Cursor
