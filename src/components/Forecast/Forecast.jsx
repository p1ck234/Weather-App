import React from 'react';
import ImageWithLoader from '../ImageWithLoader/ImageWithLoader';

function Forecast({ forecast }) {
  if (!forecast) return null;

  const dailyForecast = [];
  const dates = new Set();

  for (const item of forecast.list) {
    const date = item.dt_txt.split(' ')[0];
    if (!dates.has(date) && item.dt_txt.includes('12:00:00')) {
      dates.add(date);
      dailyForecast.push(item);
    }
    if (dailyForecast.length === 5) break;
  }

  return (
    <div className='forecast-container'>
      <h2>Прогноз на 5 дней</h2>
      <div className='forecast-cards'>
        {dailyForecast.map((item) => {
          const weatherIcon = item.weather[0].icon.replace('n', 'd');
          const weatherDescription = item.weather[0].description;
          const iconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

          return (
            <div className='forecast-card' key={item.dt}>
              <p>{new Date(item.dt_txt).toLocaleDateString()}</p>
              {weatherIcon && (
                <ImageWithLoader src={iconUrl} alt={weatherDescription} />
              )}
              <p>{weatherDescription}</p>
              <p>Температура: {Math.round(item.main.temp)} °C</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Forecast;
