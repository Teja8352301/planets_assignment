import React, { Component } from "react";
import NavItem from "./Navitem";
import { Link } from "react-router-dom";
import "./Navbar.css";
class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="title">
          <Link to="/Home" className="Navitem1">
            Machstatz
          </Link>
        </div>
        <div className="navList">
          <NavItem link="/Home">Home</NavItem>
          <NavItem link="/Favourites">Favourites</NavItem>
        </div>
      </div>
    );
  }
}
export default Navbar;
