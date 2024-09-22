import React from 'react';

function WeatherDetails({ weather }) {
  if (!weather) return null;

  const { name, main, weather: weatherInfo, wind } = weather;

  if (!Array.isArray(weatherInfo) || weatherInfo.length === 0) {
    return <p>Нет данных о погоде.</p>;
  }

  const weatherIcon = weatherInfo[0].icon.replace('n', 'd');
  const weatherDescription = weatherInfo[0].description;

  const iconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

  console.log('Icon URL:', iconUrl);

  return (
    <div className='weather-container'>
      <h2>Погода в городе {name}</h2>
      <div className='weather-details'>
        <p>Температура: {Math.round(main.temp)} °C</p>
        <p>Влажность: {main.humidity}%</p>
        <p>Скорость ветра: {wind.speed} м/с</p>
        <p>Условия: {weatherDescription}</p>
        {weatherIcon && <img src={iconUrl} alt={weatherDescription} />}
      </div>
    </div>
  );
}

export default WeatherDetails;
