import "./App.css";
import Header from "./Header";
import CurrentCityAndWeather from "./CurrentCityAndWeather";
import CurrentWeatherDetails from "./CurrentWeatherDetails";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <CurrentCityAndWeather />
        <CurrentWeatherDetails />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}
