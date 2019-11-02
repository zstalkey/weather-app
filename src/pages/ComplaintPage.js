import React from 'react';
import TextLink from '../components/atoms/TextLink';
import WeatherPerson from '../components/molecules/WeatherPerson';
import ComplaintForm from '../components/organisms/ComplaintForm';
import PageTemplate from '../components/templates/PageTemplate';
import { CURRENT_WEATHER } from '../data/mockWeather';

const ComplaintPage = (city, temperature, changeCity, forecast, ...props) => {
    return (

        <PageTemplate
            city={CURRENT_WEATHER.name}
            temperature={CURRENT_WEATHER.main.temp}
            changeCity={changeCity}
        >
            <WeatherPerson />
            <ComplaintForm />
            <TextLink>I changed my mind!</TextLink>
        </PageTemplate>
    );
};

export default ComplaintPage;