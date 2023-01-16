/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";

const Forecast = ({ api_key, search }) => {
  const [data, setData] = useState([]);
  const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${api_key}&units=metric`;

  console.log("Forecast:", data);

  useEffect(() => {
    const getForecast = async () => {
      const response = await axios.get(forecast);
      setData(response.data);
    };
    getForecast();
  }, [search]);

  return (
    <div>
      <h2>{data.city.name}</h2>
      {/*  {data.list.map((day, key) => {
        if (day.list.dt_txt)
          return (
            <div key={key}>
              <h2>
                {day.dt_txt} - {day.main.temp} -
                <img
                  src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                  alt=""
                />
              </h2>
            </div>
          );
      })} */}
    </div>
  );
};
export default Forecast;
