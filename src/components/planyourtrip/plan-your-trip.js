import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Button, Typography } from "@mui/material";

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
  flex: 1,
  marginRight: "16px",
  padding: "20px",
};

const buttonStyle = {
  marginLeft: "auto",
};

const textStyle = {
  marginLeft: "120px",
  padding: "5px",
  alignItems: "center",
};

export default function Planyourtrip() {
  const [selectedDuration, setSelectedDuration] = React.useState(""); // State to store the selected duration

  const handleSearchClick = () => {
    
    if (selectedDuration) {
      alert(`You have selected Pune for your ${selectedDuration} days trip`);
    } else {
      alert("Please select a duration before searching.");
    }
  };

  return (
    <div className="PlanYourTrip">
      <div style={textStyle}>
        <Typography>
          <h1 style={{ color: "black", fontSize: "60px" }}>
            Ready to plan your trip ?
          </h1>
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
          renderOption={(props, option) => (
            <li {...props} style={{ color: "black" }}>
              {option}
            </li>
          )}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={durations}
          value={selectedDuration} // Set the value based on selected duration
          onChange={(event, newValue) => setSelectedDuration(newValue)} // Update selected duration state
          sx={autocompleteStyle}
          renderInput={(params) => (
            <TextField {...params} label="What will be duration ?" />
          )}
          renderOption={(props, option) => (
            <li {...props} style={{ color: "black" }}>
              {option}
            </li>
          )}
        />
        <Button
          variant="outlined"
          color="primary"
          style={buttonStyle}
          onClick={handleSearchClick}
        >
          Search for places
        </Button>
      </div>
     
    </div>
  );
}
