import React, { useState } from "react";
import "./planyourtrip.css";
// import "C:/Users/Vaidish Thosar/Documents/GitHub/SIH/sih/src/components/chooselocations/chooselocations.css";

const Planyourtrip = () => {
  const [destination, setDestination] = useState("");
  const destinations = ["Pune"];
  const [duration, setDuration] = useState("");
  const durations = [
    "1 days",
    "2 days",
    "3 days",
    "4 days",
    "5 days",
    "6 days",
    "7 days",
  ];

  const findAttractions = () => {
    alert(
      "Finding attractions near " +
        destination +
        " for " +
        duration +
        " ..."
    );
  };

  return (
    <>
      <div className="destination">
        <h1>What will be the destination ?</h1>
        <select
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        >
          <option value="">Select destination</option>
          {destinations.map((op) => (
            <option key={op} value={op}>
              {op}
            </option>
          ))}
        </select>
      </div>

      <div className="duration">
        <h1>What will be your trip duration ?</h1>
        <select
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        >
          <option value="">Select duration</option>
          {durations.map((op) => (
            <option key={op} value={op}>
              {op}
            </option>
          ))}
        </select>
      </div>

      <button className="findAttraction" onClick={findAttractions}>
        Find attractions...
      </button>
    </>
  );
};

export default Planyourtrip;
