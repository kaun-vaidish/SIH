

import { Component } from "react";
import "./Navbar.css";
import logo from "./logo.jpg"
import { blueGrey } from "@mui/material/colors";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    const logoStyle = {
      filter: "brightness(1)", // Adjust the brightness as needed
    };
    return (
      <>
        <nav>
          <a href="index.html">
            <svg
              id="logo-3"
              width="132"
              height="35"
              viewBox="0 0 132 35"
              fill="none"
              
              
            >
              <image
                href="./logo.jpg"
                x="0"
                y="0"
                width="132"
                height="40"
                enableBackground={blueGrey}
                style={logoStyle}
              />
              
            </svg>
            {/* <img src={logo} x="0"
                y="0"
                width="35"
                height="35" 
                alt="logo" /> */}
          </a>

          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? 
                "#navbar active" : "#navbar"}
            >
              <li>
                <a className="active" href="index.html">
                  Home
                </a>
              </li>
              <li>
                <a href="index.html">Explore </a>
              </li>
              <li>
                <a href="index.html">Login</a>
              </li>
            </ul>
          </div>

          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
        
      </>
    );
  }
}
export default Navbar;
