// src/components/Forecast.jsx
import React from "react";

function Forecast({ forecast }) {
  if (!forecast) return null;

  // Группируем прогноз по дням
  const dailyForecast = forecast.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  return (
    <div>
      <h2>Прогноз на 5 дней</h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {dailyForecast.map((item) => (
          <div key={item.dt}>
            <p>{new Date(item.dt_txt).toLocaleDateString()}</p>
            <p>Температура: {item.main.temp} °C</p>
            <p>{item.weather[0].description}</p>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt={item.weather[0].description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
