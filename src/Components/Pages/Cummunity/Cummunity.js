import React from "react";
import "./Cummunity.css";
import tc from "../../../assets/img/tc.png";

function Cummunity() {
  const handleClick = () => {
    window.open("https://chat.whatsapp.com");
  };
  return (
    <div className="container">
      <div className="start-wrapper">
        <div className="start-img">
          <img src={tc} alt="" />
        </div>

        <div className="start-content">
          <h2 className="section-title">Join Our Free Tech Community</h2>
          <p>
            Unlock the power Of knowledge and innovation by joining our vibrant
            and free whatsApp tech community
          </p>
          <button className="register-btn" onClick={handleClick}>
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cummunity;
