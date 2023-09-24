import React from "react";
import Landingpage from "./components/landingpage/landingpage";
import "./app.css";
import Explore from "./components/Explore/Explore";

import Planyourtrip from "./components/planyourtrip/plan-your-trip";
import Chooselocations from "./components/chooselocations/chooselocations";
// import selectedPlaces from "./components/chooselocations/chooselocations";
// import selectedDuration from "./components/planyourtrip/plan-your-trip"

const App = () => {
  return (
    <>
      {/* <div>${selectedDuration}</div>
      <div>${selectedPlaces}</div> */}

      <Landingpage/>
      <Explore/>

      
      <Planyourtrip />
      <Chooselocations/>
      
      
      
    </>
  );
};

export default App;
