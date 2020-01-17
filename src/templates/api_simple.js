import React, { useState, useEffect } from "react";
import axios from "axios";
{
  /* add clear button and logic when there is no city selected */
}
function Weather() {
  const key = "70167ddbfb28dd308062c6aaf47151dc";
  const [city, setCity] = useState("");
  const [btnVal, setbtnVal] = useState("");
  const [desc, setDescription] = useState("");
  const [weatherData, setData] = useState({ humid: "", press: "", tmp: "" });
  function handleClick() {
    setbtnVal(city);
  }
  function handleClear() {
    setData({
      humid: " ",
      press: "",
      tmp: ""
    });
    setDescription("");
    setbtnVal("");
  }
  useEffect(() => {
    axios
      .get(
        ` http://api.openweathermap.org/data/2.5/weather?q=${btnVal}&APPID=${key}`
      )
      .then(result => {
        {
          result.data.weather.map(item => setDescription(item.description));
        }
        setData({
          humid: result.data.main.humidity,
          press: result.data.main.pressure,
          tmp: result.data.main.temp
        });
        console.log(result);
      });
  }, [btnVal]);

  return (
    <div>
      <input
        type="text"
        name="city"
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <button onClick={handleClick}> Get Weather</button>
      <button onClick={handleClear}>clear</button>

      <p>
        humidity:{weatherData.humid} pressure:{weatherData.press} temperature:
        {weatherData.tmp}
      </p>
      <p>Description:{desc}</p>
    </div>
  );
}
export default Weather;
