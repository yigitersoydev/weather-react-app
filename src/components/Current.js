/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";

const Current = ({ api_key, search }) => {
  const [data, setData] = useState([]);
  const current = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api_key}&units=metric`;

  console.log("Current: ", data);

  useEffect(() => {
    const getCurrent = async () => {
      const response = await axios.get(current);
      setData(response.data);
    };
    getCurrent();
  }, [search]);

  return (
    <div className="ui centered cards">
      <div className="olive card">
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${data.weather?.[0].icon}@2x.png`}
            alt=""
          />
        </div>
        <div className="content">
          <div className="header">{data.name}</div>
          <div className="meta">
            <h4>{data.main?.temp}°</h4>
          </div>
          <div className="description">{data.weather?.[0].description}</div>
        </div>
        <div className="extra content">
          <span className="right floated">{data.main?.temp_max}°</span>
          <span className="left floated">{data.main?.temp_min}°</span>
        </div>
      </div>
    </div>
  );
};
export default Current;
