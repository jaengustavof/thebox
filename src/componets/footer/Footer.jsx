import React from "react";
import "./footer.scss";
import box from "../../assets/img/thebox.png";
import facebook from "../../assets/img/facebook.png";
import linkedn from "../../assets/img/linkendn.png";
import twitter from "../../assets/img/twitter.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-date">
          <div className="date-contact">
            <div className="address">
              <h3>ADDRESS:</h3>
              <p>6391 Elgin St. Celina, Delaware 10299</p>
            </div>
            <div className="phone">
              <h3>PHONE:</h3>
              <p>+84 1102 2703</p>
            </div>
            <div className="email">
              <h3>EMAIL:</h3>
              <p>hello@thebox.com</p>
            </div>
            <img src={box} alt="" />
          </div>

          <div className="date-social">
            <h3>NEWSLETTER:</h3>
            <div className="subscribe">
              <input type="text" placeholder="Your email here" />
              <div className="subscribe-div">Subscribe</div>
            </div>
            <h4>SOCIAL:</h4>
            <div>
              <img src={facebook} alt="" />
              <img src={linkedn} alt="" />
              <img src={twitter} alt="" />
            </div>
          </div>
        </div>
        
      </div>
      <div className="copy">
        <div className="copy-container">
        TheBox Company © 2022. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
