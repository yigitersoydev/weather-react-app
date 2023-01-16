import React, { useState } from "react";
//import Forecast from "./Forecast";
import Current from "./Current";
import { Input } from "semantic-ui-react";

const Weather = () => {
  const [search, setSearch] = useState();
  const key = "6e6171b8e9cdef73f5524ced9ef76f10";
  console.log(search);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <Input placeholder="Search" onChange={handleSearch}></Input>
      <Current api_key={key} search={search} />
      <hr />
      {/*  <Forecast api_key={key} search={search} /> */}
    </div>
  );
};
export default Weather;
