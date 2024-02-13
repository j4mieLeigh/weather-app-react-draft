import "./App.css";
import Header from "./Header";
import CurrentCityAndWeather from "./CurrentCityAndWeather";
import CurrentWeatherDetails from "./CurrentWeatherDetails";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <Header />
      <CurrentCityAndWeather />
      <CurrentWeatherDetails />
      <Forecast />
    </div>
  );
}
