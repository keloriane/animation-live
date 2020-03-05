import React from 'react'


const Title = props => {
    return (
        <div className={props.classProp}>
            <h3 className="text-letter">{props.name}</h3> <div className="dot"></div>
        </div>
    )
};

export default Title
