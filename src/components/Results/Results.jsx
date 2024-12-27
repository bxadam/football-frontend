import React from "react";
import { Link } from "react-router-dom";
import pikachu from "../../assets/pikachu.jpg";
import "./Results.css";
function Results(results) {
  const { title, category, data } = results;
  // import result card class component and use results to render each card

  return (
    <>
      <div className="results">
        <div className="results__view">
          <h1 className="results__view-title">Your Results</h1>
          <ul className="results__list">
            <li className="list-item">
              <img className="img" src={pikachu} alt="" />
            </li>
            <li className="list-item">
              <img className="img" src={pikachu} alt="" />
            </li>
            <li className="list-item">
              <img className="img" src={pikachu} alt="" />
            </li>
            <li className="list-item">
              <img className="img" src={pikachu} alt="" />
            </li>
            <li className="list-item">
              <img className="img" src={pikachu} alt="" />
            </li>
          </ul>
        </div>
        <div className="results__favorites">
          <div className="results__favorite__add">
            <h2 className="results__favorite-title">
              favorite your most important searches
            </h2>
            <button className="results__favorite-btn">
              {" "}
              Click to add selected result to favorites
            </button>
            <Link to="/favorite">View Favorites</Link>
          </div>
          <div className="results__favorite__logo"></div>
        </div>
      </div>
    </>
  );
}

export default Results;
