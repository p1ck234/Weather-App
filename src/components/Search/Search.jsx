// src/components/Search.jsx
import React from "react";

function Search({ onSearch }) {
  const [city, setCity] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      onSearch(city);
      setCity("");
    }
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
