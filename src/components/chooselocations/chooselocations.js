


import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import EditCalendarTwoToneIcon from '@mui/icons-material/EditCalendarTwoTone';import { Button, Typography } from "@mui/material";

const types = [
  "HistoricalSites",
  "Parks",
  "Museums",
  "Temples",
  "Markets",
  "LakesAndDams",
  "Nightlife",
  "HiddenGems",
];

const places = {
  HistoricalSites: ["Shaniwar Wada", "Aga Khan Palace"],
  Parks: ["Peshwa Udyan Zoo", "Empress Garden"],
  Museums: ["Raja Dinkar Kelkar Museum", "Mahatma Phule Museum"],
  Temples: ["Dagdusheth Halwai", "Ramdhara"],
  Markets: ["FC Road", "Laxmi Road"],
  LakesAndDams: ["Pawna lake", "Panshet dam"],
  Nightlife: ["Koregaon park"],
  HiddenGems: ["Rihegaon dam", "Kundmala"],
};

const Chooselocations = () => {
  const [selectedType, setSelectedType] = React.useState(null);
  const [selectedPlaces, setSelectedPlaces] = React.useState([]);

  const handleTypeChange = (event, newValue) => {
    setSelectedType(newValue);
  };

  const handlePlacesChange = (event, newValue) => {
    setSelectedPlaces(newValue);
  };

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

  const optionTextStyle = {
    color: "black", 
  };

  const buttonText = selectedPlaces.length === 0 ? "Voyage Virtuoso plan" : "Create your plan";

  const textStyle = {
    marginLeft:"120px", 
    padding: "5px",
    alignItems: "center",
    
  }

  return (
    <>
      <div style={textStyle}>
        <Typography>
      <h1 style={{ color: "black", fontSize: "20px",fontFamily: "cursive" }}>Your can include your custom places or let us plan your complete trip for you </h1>
      </Typography>
      </div>      
      <div style={containerStyle}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={types}
          value={selectedType}
          sx={autocompleteStyle}
          getOptionLabel={(option) => option}
          onChange={handleTypeChange}
          renderInput={(params) => (
            <TextField {...params} label="Select type of attractions..." />
          )}
          renderOption={(props, option) => (
            <li {...props} style={{ color: 'black' }}>{option}</li>
          )}
          
          
        />

        <Autocomplete
          multiple
          id="tags-outlined"
          options={selectedType ? places[selectedType] : []}
          value={selectedPlaces}
          sx={autocompleteStyle}
          onChange={handlePlacesChange}
          getOptionLabel={(option) => (
            <span style={optionTextStyle}>{option}</span>
          )}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField {...params} label="Select places..." />
          )}
          
        />
        <Button variant="outlined" color="primary" style={buttonStyle}>
          {buttonText}
        </Button>
      </div>
    </>
  );
};

export default Chooselocations;
