import React from "react";

export default function CurrentCityAndWeather() {
  let weatherData = {
    city: "Bordeaux",
    temperature: 50,
    currentUnit: "°F",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
  };
  return (
    <div className="current-city-and-weather">
      <div className="current-city">{weatherData.city}</div>
      <div className="current-weather">
        <img
          className="current-emoji"
          src={weatherData.imgUrl}
        ></img>
        <div className="current-temperature">{weatherData.temperature}</div>
        <div className="current-unit">{weatherData.currentUnit}</div>
      </div>
    </div>
  );
}
