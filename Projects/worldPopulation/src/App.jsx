import { useState } from "react";
import "./App.css";
import coutries from "./countries";
import countries from "./countries";

const Stats = ({ country }) => {
  const chartSize = {
    width: `${country.population / 250000000}rem`,
  };
  return (
    <div className="country">
      <div className="sec1">
        <p>{country.country}</p>
        <span style={chartSize}></span>
      </div>
      <p>{country.population}</p>
    </div>
  );
};

const Population = () => {
  const renderCountry = countries.map((c, i) => (
    <Stats country={c} key={`country${i}`}></Stats>
  ));
  return renderCountry;
};

const App = () => {
  return (
    <main>
      <h1>World Population</h1>
      <Population></Population>
    </main>
  );
};

// TODO On load Animation
export default App;
