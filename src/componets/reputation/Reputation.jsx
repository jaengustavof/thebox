import React from "react";
import "./reputation.scss";
import call from "../../assets/img/call.png";
import tools from "../../assets/img/tools.png";

const Reputation = () => {
  return (
    <div className="reputation">
      <div className="reputation-container">
        <div className="reputation-h2">
          <h2>Our Reputation</h2>
        </div>
        <div className="reputation-div">
          <div className="reputation-div_services">
            <div className="reputation-div_services-img">
              <img src={call} alt="" />
            </div>
            <h4>Best Services</h4>
            <p>Nullam senectus porttitor in eget. Eget rutrum leo interdum.</p>
          </div>
          <div className=" reputation-div_teams">
            <div className="reputation-div_teams-img">
              <img src={call} alt="" />
            </div>
            <h4>Best Teams</h4>
            <p>Cursus semper tellus volutpat aliquet lacus. </p>
          </div>
          <div className=" reputation-div_designs">
            <div className="reputation-div_designs-img">
              <img src={tools} alt="" />
            </div>
            <h4>Best Designs</h4>
            <p>Ultricies at ipsum nunc, tristique nam lectus.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reputation;