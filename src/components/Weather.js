import React, { useState } from "react";
import Forecast from "./Forecast";
import Current from "./Current";
import { Input } from "semantic-ui-react";

const Weather = () => {
  const [search, setSearch] = useState();
  const key = "6e6171b8e9cdef73f5524ced9ef76f10";

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <br />
      <div class="ui large label">Enter City</div>

      <Input placeholder="Search" onChange={handleSearch}></Input>
      <br />
      <br />
      <Current api_key={key} search={search} />
      <br />
      <hr />

      <Forecast api_key={key} search={search} />
    </div>
  );
};
export default Weather;
