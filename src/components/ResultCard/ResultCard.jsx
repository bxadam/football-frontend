import React from "react";
import "./ResultCard.css";

function ResultCard() {
  return (
    <div className="result-card">
      <div className="result-card__header">
        <h2 className="result-card__header__title">SEARCH TITLE</h2>
        <p className="result-card__header__description">Category</p>
      </div>
      <div className="result-card__body">
        <p className="result-card__body__text">Stats</p>
      </div>
    </div>
  );
}

export default ResultCard;
