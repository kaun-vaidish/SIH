import React from "react";
import PlaceCard from "./Card";
import "./Explore.css";
import { Typography } from "@mui/material";

// const textStyle = {
//   marginLeft: "auto",
//   padding: "80px",
//   alignItems: "center",
// };

const containerStyle = {
  textAlign: "center",
//   backgroundColor: "#f5f5f5", // Subtle background color
  padding: "50px", // Add padding for spacing
};

const headerContainerStyle = {
  backgroundColor: "#ffffff", // White background for the header
  padding: "20px", // Add padding for spacing
  borderRadius: "10px", // Rounded corners for the header
};

const headerStyle = {
  color: "#333", // Dark gray text color
  fontSize: "36px", // Larger font size
  fontFamily: "Arial, sans-serif", // Clean and widely supported font
  marginBottom: "10px", // Add spacing below the header
};

const subTextStyle = {
  color: "#555", // Slightly lighter text color
  fontSize: "18px", // Smaller font size for subtext
  fontFamily: "Arial, sans-serif", // Consistent font
  margin: "5px 0", // Add spacing around subtext
};

const Explore = () => {
  return (
    <>
      {/* <div style={textStyle}>
        <Typography>
          <h1
            style={{ color: "black", fontSize: "60px", fontFamily: "monospace" }}
          >
            "Discover India, Day by Day: Your Cultural Odyssey"
          </h1>
        </Typography>
      </div> */}

      <div style={containerStyle}>
        <Typography>
          <div style={headerContainerStyle}>
            <h1 style={headerStyle}>Discover India, Day by Day</h1>
          </div>
          <p style={subTextStyle}>
            Unlocking Hidden Gems, One Voyage at a Time...
          </p>
          <p style={subTextStyle}>
            Crafting Your Dream Adventures, Destination by Destination...
          </p>
        </Typography>
      </div>

      <div>
        <div className="card-container">
          <PlaceCard
            imageUrl="https://findyouradventure.in/wp-content/uploads/2022/06/Visapur-trek-3.jpg"
            title="Visapur Fort"
            description="Hulala The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan."
          />

          <PlaceCard
            imageUrl="https://pawnacamp.com/storage/2018/11/Pawna-lake-camping-camp-F-09.jpg"
            title="Pawna Lake"
            description="Hulala The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan."
          />
          <PlaceCard
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/1/14/Shaniwaarwada_Pune.jpg"
            title="Shaniwar Wada"
            description="Hulala The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan."
          />
          <PlaceCard
            imageUrl="https://pbs.twimg.com/media/FJO5WY7aAAwI5CM?format=jpg&name=medium"
            title="Balewadi Highstreet"
            description="Hulala The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan."
          />
        </div>

        <div className="card-container">
          <PlaceCard
            imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/dd/fe/4e/an-evening-click-unedited.jpg?w=1200&h=1200&s=1"
            title="Rihegaon Dam"
            description="Hulala The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan."
          />
          <PlaceCard
            imageUrl="https://www.whatsabhidoing.com/wp-content/uploads/2021/11/Kund-Mala-Ride-128-1024x684.jpg"
            title="Kundmala"
            description="Hulala The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan."
          />
          <PlaceCard
            imageUrl="https://scontent.fpnq13-4.fna.fbcdn.net/v/t1.6435-9/178720146_3916718671770135_7384174774398542966_n.jpg?stp=dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=a26aad&_nc_ohc=ShIbctZXwf0AX-lE2bM&_nc_ht=scontent.fpnq13-4.fna&oh=00_AfDknUFgRtakEVZJvIWJw9iGwh7haoZ78d8PTJdm0qSJEw&oe=653514D3"
            title="Necklace point"
            description="Hulala The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan."
          />
          <PlaceCard
            imageUrl="https://www.konkan.me/wp-content/uploads/2021/04/ramdara-temple-pune-loni-kalbhor.jpg"
            title="Ramdara Temple"
            description="lelelala The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan."
          />
        </div>
      </div>
    </>
  );
};

export default Explore;
