import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./app.css";
import PlaceCard from "./components/mui/Card";

import Planyourtrip from "./components/planyourtrip/plan-your-trip";
import Chooselocations from "./components/chooselocations/chooselocations";



const App = () => {
  return (
    <>
      <Navbar />

      <div className="card-container">
        <PlaceCard
          imageUrl="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/08/02112702/taj-mahal-1024x682.jpeg"
          title="Taj Mahal"
          description="Hulala The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan."
        />
        <PlaceCard
          imageUrl="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/08/02112702/taj-mahal-1024x682.jpeg"
          title="Taj Mahal"
          description="Hulala The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan."
        />
        <PlaceCard
          imageUrl="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/08/02112702/taj-mahal-1024x682.jpeg"
          title="Taj Mahal"
          description="Hulala The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan."
        />
        <PlaceCard
          imageUrl="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/08/02112702/taj-mahal-1024x682.jpeg"
          title="Taj Mahal"
          description="Hulala The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan."
        />
      </div>


      <div className="card-container">
        <PlaceCard
          imageUrl="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/08/02112702/taj-mahal-1024x682.jpeg"
          title="Taj Mahal"
          description="Hulala The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan."
        />
        <PlaceCard
          imageUrl="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/08/02112702/taj-mahal-1024x682.jpeg"
          title="Taj Mahal"
          description="Hulala The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan."
        />
        <PlaceCard
          imageUrl="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/08/02112702/taj-mahal-1024x682.jpeg"
          title="Taj Mahal"
          description="Hulala The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan."
        />
        <PlaceCard
          imageUrl="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/08/02112702/taj-mahal-1024x682.jpeg"
          title="Taj Mahal"
          description="Hulala The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan."
        />
      </div>

      <Planyourtrip />
      <Chooselocations/>
      
      
    </>
  );
};

export default App;
