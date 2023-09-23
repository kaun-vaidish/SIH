import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const types = [
  "HistoricalSites",
  "Parks",
  "Museums",
  "Temples",
  "Markets",
  "LakesAndDams",
  "Nightlife",
  "Forts",
  "HiddenGems",
  
];

const places = {
  HistoricalSites: ["Shaniwar Wada", "Aga Khan Palace","Pataleshwar Caves", "Lal Mahal (Red Palace)","Vishrambaug Wada Kelshetra"],
  Parks: ["Peshwa Udyan Zoo", "Empress Garden","Kamala Nehru Park", "Pune-Okayama Friendship Garden", "Osho Teerth Park", "Jogger's Park", "Peshwe Energy Park"],
  Museums: ["Raja Dinkar Kelkar Museum", "Maratha History Museum", "Darshan Museum"],
  Temples: ["Shree Omkareshwar Temple", "Shreemant Dagdusheth Halwai Ganpati Mandir", "Shri Chatushrungi Devi Temple", "ISKCON NVCC", "Shri Mahalaxmi Mandir"],
  Markets: ["FC Road", "Laxmi Road","Tulshi Baug","Camp market"],
  LakesAndDams: ["Pawna lake","Pashan Lake", "Jambhulwadi Lake", "Pashan Hill Lake","Khadakwasla Dam And Chowpati", "Marunji Dam", "Kasarsai Dam","Panshet Dam","Mulshi Dam"],
  Nightlife: ["Koregaon park","Balewadi Highstreet"],
  Forts: ["Sinhgad","Raigad","Lohagad","Visapur","Torna (Prachandagad)","Rajgad","Purandar","Korigad"," Rajmachi (Shrivardhan and Manaranjan)","Malhargad"],
  HiddenGems: ["Rihegaon dam", "Kundmala waterfall","Ramdara temple","Milkybar waterfall","Bendewadi Waterall"],
};

const Chooselocations = () => {
  const [selectedType, setSelectedType] = React.useState(null);
  const [selectedPlaces, setSelectedPlaces] = React.useState([]);
  const [showAlert, setShowAlert] = React.useState(false);

  const handleTypeChange = (event, newValue) => {
    setSelectedType(newValue);
  };

  const handlePlacesChange = (event, newValue) => {
    setSelectedPlaces(newValue);
  };

  const handleButtonClicked = () => {
    setShowAlert(true);
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

  const buttonText =
    selectedPlaces.length === 0 ? "Voyage Virtuoso plan" : "Create your plan";

  const textStyle = {
    marginLeft: "120px",
    padding: "5px",
    alignItems: "center",
  };

  return (
    <>
      <div style={textStyle}>
        <Typography>
          <h1
            style={{ color: "black", fontSize: "20px", fontFamily: "cursive" }}
          >
            You can include your custom places or let us plan your complete
            trip for you{" "}
          </h1>
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
            <li {...props} style={{ color: "black" }}>
              {option}
            </li>
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
        <Button
          variant="outlined"
          color="primary"
          style={buttonStyle}
          onClick={handleButtonClicked}
        >
          {buttonText}
        </Button>
      </div>

      <div style={{ marginTop: "50px" }}>
        {showAlert && (
          <Alert
            severity="info"
            style={{
              position: "relative",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              maxWidth: "50%",
              backgroundColor: "rgba(0, 120 , 255, 0.6)",
              color: "black",
              padding: "10px",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            Hurrayyyyyy !!! The plan is being generated
          </Alert>
        )}
      </div>

      {showAlert && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              "& > :not(style)": {
                m: 1,
                width: 700,
                height: "500px",
                backgroundColor: "CaptionText",
                color: "white",
                padding: "20px",
                display: "flex",
              },
            }}
          >
            <Paper elevation={10}>Creating the best plan suitable for you ...</Paper>
          </Box>
        </div>
      )}
    </>
  );
};

export default Chooselocations;
