import React from 'react'

const Textlink = ({ onButtonClick, ...props }) => {
    return (
        <div>
            <button onClick={onButtonClick}>{props.children}</button>
        </div>
    )
};

export default Textlink