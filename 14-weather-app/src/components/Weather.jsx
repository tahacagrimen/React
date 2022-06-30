import React, { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";

function Weather({ latitude, longitude }) {
  const data = useContext(WeatherContext);
  return <div></div>;
}

export default Weather;
