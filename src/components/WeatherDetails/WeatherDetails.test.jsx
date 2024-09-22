import React from "react";
import { render } from "@testing-library/react";
import WeatherDetails from "./WeatherDetails";

test("отображает данные погоды правильно", () => {
  const mockWeather = {
    name: "Москва",
    main: {
      temp: 10,
      humidity: 80,
    },
    wind: {
      speed: 5,
    },
    weather: [
      {
        description: "облачно",
        icon: "04d",
      },
    ],
  };

  const { getByText, getByAltText } = render(
    <WeatherDetails weather={mockWeather} />
  );

  expect(getByText(/погода в городе москва/i)).toBeInTheDocument();
  expect(getByText(/температура: 10 °c/i)).toBeInTheDocument();
  expect(getByText(/влажность: 80%/i)).toBeInTheDocument();
  expect(getByText(/скорость ветра: 5 м\/с/i)).toBeInTheDocument();
  expect(getByText(/облачно/i)).toBeInTheDocument();
  expect(getByAltText(/облачно/i)).toBeInTheDocument();
});
