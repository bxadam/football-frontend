import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";
import pikachu from "../../assets/pikachu.jpg";

function Header() {
  return (
    <>
      <div className="header">
        <div className="header__links">
          <Link to={"/home"} className="header__home">
            Home
          </Link>
          <Link to={"/profile"} className="header__profile">
            Profile
          </Link>
        </div>
        <SearchBar></SearchBar>
        <div className="header__user-info">
          <button className="header__login">Log In</button>
          <button className="header__register">Register</button>
          <img src={pikachu} alt="avatar" className="header__avatar" />
        </div>
      </div>
    </>
  );
}

export default Header;
