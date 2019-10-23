import React from 'react'

const WeatherIcon = ({ weathericon, ...props }) => {
    return <img src={weathericon} alt="Weather Icon" />;
};

export default WeatherIcon
