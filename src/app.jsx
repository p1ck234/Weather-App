import React from "react";
import axios from "axios";
import Search from "./components/Search/Search";
import WeatherDetails from "./components/WeatherDetails/WeatherDetails";
import Forecast from "./components/Forecast/Forecast";

function App() {
  const [weather, setWeather] = React.useState(null);
  const [forecast, setForecast] = React.useState(null);
  const [error, setError] = React.useState("");

  const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

  const handleSearch = async (city) => {
    try {
      setError("");
      // Запрос текущей погоды
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`
      );
      setWeather(weatherResponse.data);

      // Запрос прогноза на 5 дней
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=ru`
      );
      setForecast(forecastResponse.data);
    } catch (err) {
      setError("Город не найден или произошла ошибка при запросе.");
      setWeather(null);
      setForecast(null);
    }
  };

  return (
    <div>
      <h1>Прогноз погоды</h1>
      <Search onSearch={handleSearch} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <WeatherDetails weather={weather} />
      <Forecast forecast={forecast} />
    </div>
  );
}

export default App;
