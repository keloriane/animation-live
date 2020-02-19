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
            console.log(e)
        }
    },[])

    return (
        <div>
            <div id="c-cursor"></div>
            <div id="inner-cursor"></div>
        </div>
    )
}
export default Cursor
