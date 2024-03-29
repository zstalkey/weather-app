import React from 'react';
import WeatherIcon from '../atoms/WeatherIcon';
import HourlyWeather from './HourlyWeather';

const DailyWeatherItem = ({ date, weathericon, list, maxTemp, minTemp, ...props }) => {
    return (
        <div>
            <h3>{date}</h3>
            <WeatherIcon icon={weathericon} />
            <div>{maxTemp}</div>
            <div>{minTemp}</div>
            <HourlyWeather list={list} />
        </div>
    );
};

export default DailyWeatherItem;