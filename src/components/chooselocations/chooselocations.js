// import React, { useState } from "react";
// import "./chooselocations.css";
// //import Select from 'react-select';

// function Chooselocations() {
//   const [myList, setMyList] = useState([]);
//   const [selectTypes, setSelectTypes] = useState("");

// const types = [
//   "HistoricalSites",
//   "Parks",
//   "Museums",
//   "Temples",
//   "Markets",
//   "LakesAndDams",
//   "Nightlife",
//   "HiddenGems",
// ];
//   const [selectPlaces, setSelectPlaces] = useState("");
// const places = {
//   HistoricalSites: ["Shaniwar Wada", "Aga Khan Palace"],
//   Parks: ["Peshwa Udyan Zoo", "Empress Garden"],
//   Museums: ["Raja Dinkar Kelkar Museum", "Mahatma Phule Museum"],
//   Temples: ["Dagdusheth Halwai", "Ramdhara"],
//   Markets: ["FC Road", "Laxmi Road"],
//   LakesAndDams: ["Pawna lake", "Panshet dam"],
//   Nightlife: ["Koregaon park"],
//   HiddenGems: ["Rihegaon dam", "Kundmala"],
// };

//   const handleTypeChange = (event) => {
//     const type = event.target.value;
//     setSelectTypes(type);

//     setSelectPlaces(null);
//   };

//   const handlePlaceChange = (event) => {
//     const place = event.target.value;
//     setSelectPlaces(place);
//     setMyList([...myList, place]);
//   };

//   return (
//     <div>
//       <h2>Select a Location:</h2>
//       <div>
//         <label>Select Type:</label>
//         <select value={selectTypes} onChange={handleTypeChange}>
//           <option value="">Select Type</option>
//           {types.map((type) => (
//             <option key={type} value={type}>
//               {type}
//             </option>
//           ))}
//         </select>
//       </div>
//       {selectTypes && (
//         <div>
//           <label>Select Place:</label>
//           <select value={selectPlaces} onChange={handlePlaceChange}>
//             <option value="">Select Place</option>
//             {places[selectTypes].map((place) => (
//               <option key={place} value={place}>
//                 {place}
//               </option>
//             ))}
//           </select>
//         </div>
//       )}
//       {/* {selectTypes && selectPlaces && (
//         <div>
//           <p>You have selected: {selectPlaces} in {selectTypes}</p>
//         </div>
//       )} */}

//       <ul>
//         {myList.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>

//     </div>

//   );
// }

// export default Chooselocations;






import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import CreateIcon from '@mui/icons-material/Create';
import { Button } from "@mui/material";

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
    flex: 1, // Allow Autocomplete components to grow and take available space
    marginRight: "16px", // Add some spacing between the components
    padding: "20px",
  };
  

  const buttonStyle = {
    marginLeft: "auto" ,// Push the button to the right side of the container
    
  };

  return (
    <>
    <div style={containerStyle}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={types}
        value={selectedType}
        sx={autocompleteStyle}
        onChange={handleTypeChange}
        renderInput={(params) => (
          <TextField {...params} label="Select type of attractions..." />
        )}
      />

      <Autocomplete
        multiple
        id="tags-outlined"
        options={selectedType ? places[selectedType] : []}
        value={selectedPlaces}
        sx={autocompleteStyle}
        // size="small"
        onChange={handlePlacesChange}
        getOptionLabel={(option) => option}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select places..."
            // placeholder="Favorites"
          />
        )}
      />
      <Button startIcon={<CreateIcon />} variant="outlined" color="primary" style={buttonStyle}>
        Create your plan
      </Button>
      </div>
    </>
  );
};

export default Chooselocations;
