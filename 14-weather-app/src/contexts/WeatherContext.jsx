import React, { createContext, useState, useEffect } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = (props) => {
  const [data, setData] = useState({ lat: "", lon: "" });
  function getData(a, b) {
    useEffect(() => {
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${a}&lon=${b}&exclude=minutely,hourly&units=metric&appid=7aff406c731cdcb4010f9219e8f01864`
      )
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);
  }

  return (
    <WeatherContext.Provider value={data}>
      {props.children}
    </WeatherContext.Provider>
  );
};
