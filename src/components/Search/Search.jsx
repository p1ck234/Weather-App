// src/components/Search/Search.jsx
import React from "react";

function Search({ onSearch }) {
  const [city, setCity] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedCity = city.trim();
    if (trimmedCity.length < 2) {
      alert("Пожалуйста, введите корректное название города.");
      return;
    }
    onSearch(trimmedCity);
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Введите название города"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Поиск</button>
    </form>
  );
}

export default Search;
