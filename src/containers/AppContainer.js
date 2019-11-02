import React, { Component } from 'react';
import ComplaintPage from '../pages/ComplaintPage';
import WeatherPage from '../pages/WeatherPage';
import { CURRENT_WEATHER, HOURLY_FORECAST } from '../data/mockWeather';

const CITIES = ['London', 'Perth', 'Tokyo', 'Rome', 'Singapore', 'Sydney'];

class AppContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            city: CITIES[0],
            temperature: CURRENT_WEATHER.main.temp,
            forecast: HOURLY_FORECAST.list
        };

        this.handleCityChange = this.handleCityChange.bind(this)
    }

    getRandomCity(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    handleCityChange() {
        console.log('handle city change')
        this.setState({ city: this.getRandomCity(CITIES) })
    }

    render() {
        return (
            <>
                <WeatherPage
                    city={this.state.city}
                    temperature={this.state.temperature}
                    forecast={this.state.forecast}
                    changeCity={this.handleCityChange}
                />
                <ComplaintPage
                    city={this.state.city}
                    temperature={this.state.temperature}
                    changeCity={this.handleCityChange}
                />
            </>
        );
    }

}

export default AppContainer;