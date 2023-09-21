// // import React, { useState } from "react";
// // import "./planyourtrip.css";

// // const Planyourtrip = () => {
// //   const [destination, setDestination] = useState("");
// //   const destinations = ["Pune"];
// //   const [duration, setDuration] = useState("");
//   // const durations = [
//   //   "1 days",
//   //   "2 days",
//   //   "3 days",
//   //   "4 days",
//   //   "5 days",
//   //   "6 days",
//   //   "7 days",
//   // ];

// //   const findAttractions = () => {
// //     alert(
// //       "Finding attractions near " +
// //         destination +
// //         " for " +
// //         duration +
// //         " ..."
// //     );
// //   };

// //   return (
// //     <>
// //       <div className="destination">
// //         <h1>What will be the destination ?</h1>
// //         <select
// //           value={destination}
// //           onChange={(e) => setDestination(e.target.value)}
// //         >
// //           <option value="">Select destination</option>
// //           {destinations.map((op) => (
// //             <option key={op} value={op}>
// //               {op}
// //             </option>
// //           ))}
// //         </select>
// //       </div>

// //       <div className="duration">
// //         <h1>What will be your trip duration ?</h1>
// //         <select
// //           value={duration}
// //           onChange={(e) => setDuration(e.target.value)}
// //         >
// //           <option value="">Select duration</option>
// //           {durations.map((op) => (
// //             <option key={op} value={op}>
// //               {op}
// //             </option>
// //           ))}
// //         </select>
// //       </div>

// //       <button className="findAttraction" onClick={findAttractions}>
// //         Find attractions...
// //       </button>
// //     </>
// //   );
// // };

// // export default Planyourtrip;

import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Button, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const allowedOptions = [
  "Pune",
  "Mumbai",
  "Nagpur",
  "Akola",
  "Kolhapur",
  "Amravati",
  "Jalna",
  "Nanded",
];

const durations = [
  "1 days",
  "2 days",
  "3 days",
  "4 days",
  "5 days",
  "6 days",
  "7 days",
];

const containerStyle = {
  display: "flex",
  alignItems: "center", 
  padding: "20px 100px",
};

const autocompleteStyle = {
  flex: 1, // Allow Autocomplete components to grow and take available space
  marginRight: "16px", // Add some spacing between the components
  padding: "20px",
};

const buttonStyle = {
  marginLeft: "auto" ,// Push the button to the right side of the container
  
};

const textStyle = {
  marginLeft: "115px", // Add some spacing between the components
  padding: "5px",
  alignItems: "center",
}

export default function Planyourtrip() {
  return (

    <>
    <div style={textStyle}>
    <Typography>
    <h1>Ready to plan your trip ?</h1>
    </Typography>
    </div>

    <div style={containerStyle}>
      <Autocomplete
        id="disabled-options-demo"
        options={allowedOptions}
        getOptionDisabled={(option) => option !== "Pune"}
        sx={autocompleteStyle}
        renderInput={(params) => (
          <TextField {...params} label="Select your destination..." />
        )}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={durations}
        sx={autocompleteStyle}
        renderInput={(params) => <TextField {...params} label="What will be duration ?" />}
      />
      <Button startIcon={<SearchIcon />} variant="outlined" color="primary" style={buttonStyle}>
        Search for places
      </Button>
    </div>
    </>
  );
}
