import React, { useEffect } from "react";
import gsap from "gsap";
import "./Cursor.scss";
const Cursor = () => {
    useEffect(() => {
        const page = document.getElementById('root');
        const cursor = document.getElementById('c-cursor');
        const innerCursor = document.getElementById('inner-cursor');

        console.log(innerCursor, cursor)
        const mouseMove = (e) => {
            console.log(e.clientX , e.clientY)
            const enterMouse = () => {
                gsap.to([cursor,innerCursor], 1,{})
            }
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
    },[])

    return (
        <div>
            <div id="c-cursor"></div>
            <div id="inner-cursor"></div>
        </div>
    )
}
export default Cursor
