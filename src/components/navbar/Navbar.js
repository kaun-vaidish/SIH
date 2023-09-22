

import { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
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
              
              xmlns="http://www.w3.org/2000/svg"
            >
              <image
                href="C:\Users\Vaidish Thosar\Documents\GitHub\SIH\sih\public\logo.jpg"
                x="0"
                y="0"
                width="132"
                height="35"
              />
              
            </svg>
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
                <a href="index.html">Plan your trip </a>
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
