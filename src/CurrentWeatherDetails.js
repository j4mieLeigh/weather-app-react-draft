import React from "react";

export default function CurrentWeatherDetails() {
  let weatherDetails = {
    date: "Tuesday",
    time: "5:50pm",
    conditions: "cloudy",
    humidity: "50",
    wind: "5",
    currentUnit: "km/h",
  };
  return (
    <div className="current-weather-details">
      <span>
        {weatherDetails.date} {weatherDetails.time}
      </span>
      , <span>{weatherDetails.conditions}</span>
      <br />
      Humidity: <strong>{weatherDetails.humidity}</strong>%, Wind:
      <strong> {weatherDetails.wind}</strong>
      {weatherDetails.currentUnit}
    </div>
  );
}
