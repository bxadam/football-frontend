import React from "react";
import "./Footer.css";
import pikachu from "../../assets/pikachu.jpg";
import ball from "../../assets/ball.svg";
// could change app name to img tag with logo

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__author">
          <h2 className="footer__author-name">Brandon Adam</h2>
          <img src={pikachu} alt="avatar" className="footer__author-avatar" />
        </div>
        <div className="footer__app-container">
          <img src={ball} alt="" className="footer__app-logo" />
          <div className="footer__app-text">
            <p className="footer__app-name">Football4U</p>
            <p className="footer__app-date">Last Update : 12/25/2024</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
