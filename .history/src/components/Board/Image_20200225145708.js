import React from 'react'

const Image = (props) => {
    return (
        <div className="image-container">

                <img className="mountain-view  " src={props.image} alt="" />
            </div>
    )
}

export default Image
