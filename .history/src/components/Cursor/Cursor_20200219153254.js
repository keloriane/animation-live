import React, { useEffect } from "react";
import gsap from "gsap";
import "./Cursor.scss";
const Cursor = () => {
    useEffect(() => {
        const page = document.getElementById('root');
        const cursor = document.getElementsByClassName('c-cursor');
        const innerCursor = document.getElementsByClassName('inner-cursor');

        console.log(innerCursor, cursor)
    },[])

    return (
        <div>
            <div className="c-cursor"></div>
            <div id="inner-cursor"></div>
        </div>
    )
}
export default Cursor
