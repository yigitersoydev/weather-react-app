/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";

const Current = ({ api_key, search }) => {
  const [data, setData] = useState([]);
  const current = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api_key}&units=metric&lang=tr`;

  console.log("Current: ", data);

  useEffect(() => {
    const getCurrent = async () => {
      const response = await axios.get(current);
      setData(response.data);
    };
    getCurrent();
  }, [search]);

  return (
    <div>
      <h1>{data.name}</h1>
      {/*  <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt=""
      /> */}
      <h2>{data.main?.temp}</h2>

      <h3>
        {data.main?.temp_min} {data.main?.temp_max}
      </h3>
      {/*  <h3>{data.weather[0]?.description}</h3> */}
    </div>
  );
};
export default Current;
