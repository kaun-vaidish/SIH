import React from "react";
import Navbar from "./components/navbar/Navbar";
import './app.css'
import Planyourtrip from "./components/planyourtrip/plan-your-trip";
import Chooselocations from "./components/chooselocations/chooselocations";

const App = () => {
  return (
    <>
      <Navbar/>
      {/* <div style={{ clear: 'both' }}></div> */}
      <Planyourtrip />
      {/* <div style={{ clear: 'both' }}></div> */}
      <Chooselocations/>
      {/* <div style={{ clear: 'both' }}></div> */}
      
    </>
  );
};

export default App;
