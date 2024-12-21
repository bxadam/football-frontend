import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";

function Header() {
  return (
    <>
      <div className="header__container">
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
          <button className="header__login"></button>
          <button className="header__register"></button>
          <img src="user avatar" alt="avatar" className="header__avatar" />
        </div>
      </div>
    </>
  );
}

export default Header;
