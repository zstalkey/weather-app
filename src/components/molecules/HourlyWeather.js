import React from 'react';
import WeatherIcon from '../atoms/WeatherIcon';

const HourlyWeather = ({ time, weathericon, maxTemp, ...props }) => {
    return (
        <li>
            <div>{time}</div>
            <WeatherIcon icon={weathericon} />
            <div>{maxTemp}</div>
        </li>
    );
};

export default HourlyWeather;
