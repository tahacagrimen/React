import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import "./Weather.css";

function Weather({ latitude, longitude }) {
  const weeklist = useContext(WeatherContext);
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&units=metric&appid=7aff406c731cdcb4010f9219e8f01864`
    )
      .then((res) => res.json())
      .then((data) => setWeather([...data.daily]));
  }, [latitude]);
  console.log(weeklist);
  console.log(weather);

  return (
    <div className="weather-container">
      <div className="weather-card">
        {weeklist.map((day, index) => (
          <div key={index} className="weather-card-day">
            <p>{day}</p>
            <img
              src={`http://openweathermap.org/img/wn/${weather[index].weather[0].icon}@2x.png`}
              alt="weather"
            />
            <div>
              <p>{weather[index].temp.max}°</p>
              <p>{weather[index].temp.min}°</p>
            </div>
            <p>{weather[index].weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Weather;
