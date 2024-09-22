import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
import axios from "axios";
import App from "./app";

jest.mock("axios");

const mockWeatherData = {
  data: {
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
  },
};

const mockForecastData = {
  data: {
    list: [],
  },
};

test("отображает лоадер во время загрузки данных", async () => {
  axios.get.mockResolvedValueOnce(mockWeatherData);
  axios.get.mockResolvedValueOnce(mockForecastData);

  const { getByPlaceholderText, getByRole, getByTestId, queryByTestId } =
    render(<App />);

  const input = getByPlaceholderText("Введите название города");
  const button = getByRole("button", { name: /поиск/i });

  fireEvent.change(input, { target: { value: "Москва" } });
  fireEvent.click(button);

  expect(getByTestId("loader")).toBeInTheDocument();

  await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(2));

  expect(queryByTestId("loader")).not.toBeInTheDocument();
});
