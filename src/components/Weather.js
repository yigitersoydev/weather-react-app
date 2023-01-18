import React, { useState } from "react";
import Forecast from "./Forecast";
import Current from "./Current";
import { Input } from "semantic-ui-react";

const Weather = () => {
  const [search, setSearch] = useState();
  const key = "YOUR_API_KEY";

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
