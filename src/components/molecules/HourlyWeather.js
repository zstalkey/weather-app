import React from 'react';
import HourlyWeatherItem from './HourlyWeatherItem';

const HourlyWeather = ({ list, ...props }) => {
    return (
        <ul>
            {list.map(item => (
                <HourlyWeatherItem
                    key={item.dt}
                    //time={moment(item.dt).format('ha')}
                    time={item.dt}
                    icon={item.weather[0].icon}
                    maxTemp={item.main.temp_max}
                />
            ))}
        </ul>
    );
};

export default HourlyWeather;
