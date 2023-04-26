import React, { useState } from "react";
import axios from "axios";
import "./style.css"


const Weather1 = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "7472874efa66cef81926187d164bd518";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  
  const handleSearch = () => {
    if (city === "") {
      setError("Please enter a city");
      return;
    }

    setIsLoading(true);
    setError("");

    axios
      .get(API_URL)
      .then((response) => {
        setWeatherData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError("Error fetching weather data");
        setIsLoading(false);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center mb-4">Weather App</h1>
          <div className="form-group">
            <center><label htmlFor="city">City</label></center>
            <input
              type="text"
              className="form-control"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <center><button className="btn btn-primary mb-3 " onClick={handleSearch}>
            Search
          </button></center>
          {isLoading && <div>Loading...</div>}
          {error && <div className="text-danger">{error}</div>}
          {weatherData && (
            <div>
              <h2 className="text-center mb-4">
                Weather in {weatherData.name}
              </h2><center>
              <div className="btn btn-primary" >
              <p>Temperature: {weatherData.main.temp} °C</p>
              <p>Humidity: {weatherData.main.humidity}%</p>
              <p>Wind speed: {weatherData.wind.speed} m/s</p>
              <p>Feels like:{weatherData.main.feels_like}</p>
              <p>Max Temp:{weatherData.main.temp_max}deg</p>
              <p>Min Temp:{weatherData.main.temp_min}deg</p>
              <p>pressure:{weatherData.main.pressure}</p>
              </div></center>
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather1;