import React from "react";
import "./Footer.css";
import logo from "../../assets/img/footer.png";
import { Link } from "react-router-dom";

function Footer() {
  const handleClick = () => {
    window.scrollTo(0,0);
  }
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wraper">
          <div className="footer-box">
            <div className="logo">
              <div className="logo-img">
                <img src={logo} alt="" />
              </div>
              <h2>Tech Learning AI</h2>
            </div>
            <p>
              Embrace the future of anovation and tecnology with our
              cutting-edge tech business solution
            </p>
          </div>

          <div className="footer-box">
            <h4 className="footer_title">Company</h4>
            <ul className="footer_links">
              <li>
                <Link to='/courses' onClick={handleClick}>Our programs</Link>
              </li>
              <li>
                <Link to='/services' onClick={handleClick}> Our plan</Link>
              </li>
              <li>
                <li>Become a member</li>
              </li>
            </ul>
          </div>

          <div className="footer-box">
            <h4 className="footer_title">Quick Links</h4>
            <ul className="footer_links">
              <li>
                <Link to= '/about' onClick={handleClick}>About Us</Link>
              </li>
              <li>
                <Link to='/contact' onClick={handleClick}>Contact Us</Link>
              </li>
              <li>
                <Link to= '/support' onClick={handleClick}>Support Us</Link>
              </li>
              <li>8089566366</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
