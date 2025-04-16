import axios from "axios";
import { useEffect, useState } from "react";

export default function WeatherDetail({ country }) {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const lat = country.capitalInfo.latlng[0];
        const lon = country.capitalInfo.latlng[1];
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
        const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        axios
            .get(weatherApiUrl)
            .then((response) => {
                setWeather(response.data);
            })
            .catch((error) => {
                console.error("Error fetching weather:", error);
            });
    }, [country]);

    if (!weather) return;

    return (
        <>
            <p>Temperature {weather.main.temp} °C</p>
            <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            ></img>
            <p>Wind {weather.wind.speed} m/s</p>
        </>
    );
}
