import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Searchbox = () => {
  const [city, setcity] = useState("");
  const handleChange = (evt) => {
    setcity(evt.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(city);
    setcity("");
  };
  return (
    <div>
      <div className="text-center">
        <h2 className="bg-black text-white  text-xl">Search for the Weather</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            id="city"
            label="City Name"
            variant="outlined"
            required
            value={city}
            onChange={handleChange}
          />
          <br />
          <br />
          <Button variant="contained" type="submit">
            Search
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Searchbox;
