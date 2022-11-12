import React from "react";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <div className="youCan">
          <h2>What can us do for you?</h2>
          <p>
            We are ready to work on a project of any complexity, whether it’s
            commercial or residential.
          </p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your Name*" className="input1" />
          <input type="text" placeholder="Email*" className="input2" />
          <select
            placeholder="Reason for Contacting*"
            className="input3"
          >
            <option value="">Reason for Contacting*</option>
            <option value="1" className="option-selected">Reason1</option>
            <option value="2" className="option-selected">Reason2</option>
            <option value="3" className="option-selected">Reason3</option>
            <option value="4" className="option-selected">Reason4</option>
            </select>
          <input type="text" placeholder="Phone" className="input4" />
          <textarea
            placeholder="Message"
            className="input input-message"
          />
          <p className="p-message">* indicates a required field</p>
        </div>
        <div className="enviar">Submit</div>
      </div>
    </div>
  );
};

export default Login;
