/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";

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
    <div class="ui horizontal divided list">
      {data.list?.map((day, key) => {
        return (
          <div className="item" key={key}>
            <h4>{format(new Date(day.dt_txt), "d LLL yy")}</h4>
            <div className="content">
              <h4>{format(new Date(day.dt_txt), "E")}</h4>
            </div>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather?.[0].icon}.png`}
              alt=""
            />
            <div className="content">
              <div className="description">{day.main?.temp}°</div>
              <div className="header">
                {format(new Date(day.dt_txt), "HH:mm")}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Forecast;
