// src/components/WeatherDetails.jsx
import React from "react";

function WeatherDetails({ weather }) {
  if (!weather) return null;

  const { name, main, weather: weatherInfo, wind } = weather;

  return (
    <div>
      <h2>Погода в городе {name}</h2>
      <p>Температура: {main.temp} °C</p>
      <p>Влажность: {main.humidity}%</p>
      <p>Скорость ветра: {wind.speed} м/с</p>
      <p>
        Условия: {weatherInfo[0].description}
        <img
          src={`https://openweathermap.org/img/wn/${weatherInfo[0].icon}@2x.png`}
          alt={weatherInfo[0].description}
        />
      </p>
    </div>
  );
}

export default WeatherDetails;
