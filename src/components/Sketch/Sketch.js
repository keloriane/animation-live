import React,{useEffect} from 'react';
import * as p5 from 'p5';

const Sketch = () => {
    useEffect(()=> {
        console.log("render")
    })
    return (
        <div className="sketch">
            <canvas></canvas>
        </div>
    )
}