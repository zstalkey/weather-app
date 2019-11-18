import React from 'react';
import HourlyWeatherItem from './HourlyWeatherItem';
import moment from 'moment';

const HourlyWeather = ({ list, ...props }) => {
    return (
        <ul>
            {list.map(item => (
                <HourlyWeatherItem
                    key={item.dt}
                    time={moment(item.dt_txt).format('LT')}
                    icon={item.weather[0].icon}
                    maxTemp={item.main.temp_max}
                />
            ))}
        </ul>
    );
};

export default HourlyWeather;
