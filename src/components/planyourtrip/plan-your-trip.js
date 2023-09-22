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
  flex: 1, 
  marginRight: "16px", 
  padding: "20px",
};

const buttonStyle = {
  marginLeft: "auto" ,
  
};

const textStyle = {
  marginLeft:"120px", 
  padding: "5px",
  alignItems: "center",
  
}



export default function Planyourtrip() {
  return (
    <>
      <div style={textStyle}>
        <Typography>
      <h1 style={{ color: "black", fontSize: "60px",fontFamily: "cursive" }}>Ready to plan your trip ?</h1>
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
            <li {...props} style={{ color: 'black' }}>{option}</li>
          )}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={durations}
          sx={autocompleteStyle}
          renderInput={(params) => <TextField {...params} label="What will be duration ?" />}
          renderOption={(props, option) => (
            <li {...props} style={{ color: 'black' }}>{option}</li>
          )}
        />
        <Button variant="outlined" color="primary" style={buttonStyle}>
          Search for places
        </Button>
      </div>
    </>
  );
}
