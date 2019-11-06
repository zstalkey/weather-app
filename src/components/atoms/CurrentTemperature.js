import React from 'react'

const CurrentTemperature = ({ temperature, ...props }) => {
    return (
        <div>
            <p>{temperature}</p>
        </div>
    )
}

export default CurrentTemperature
