import React from 'react';

const CurrentWeather = ({city, temperature, ...props}) => {
    return (
        <div>
            <div>{temperature}</div>
            <div>{city}</div>
        </div>
    )
}

export default CurrentWeather; 
