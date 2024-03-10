// Footer.jsx

import "../styles/Footer.scss";
import React from "react";
import { LocationOn, LocalPhone, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <a href="/">
          <img src="/assests/logo.png" alt="logo" />
        </a>
        <p>Empowering Your Adventours Journey With Us</p>
      </div>

      <div className="footer_center">
        <h2>Quick Links</h2>
        <br/>
        <ul>
         <li>Trip List</li><br/>
          <li>Wish List</li><br/>
          <li>Property List</li><br/>
          <li>Reservation List</li>
        </ul>
      </div>

      <div className="footer_center ">
        <h2>More Links</h2>
        <br/>
        <ul>
          <li>About Us</li>
          <br/>
          <li>Contact Us</li>
          <br/>
          <li>Privacy Policy</li>
          <br/>
          <li>FAQs</li>
        </ul>
      </div>

      <div className="footer_right">
        <h2>Contact</h2>
        <br/>
        <div className="footer_right_info">
          <LocalPhone />
          <p>+1 234 567 890</p>
        </div>
        <div className="footer_right_info">
          <Email />
          <p>dreamnest@support.com</p>
        </div>
        <div className="footer_right_info">
          <LocationOn />
          <p>
            123 Dream Street, Suite 456 Dream City,<br/>United Dreamsland
          </p>
        </div>
        <img src="/assests/payment.png" alt="payment" />
      </div>
      <div className="copyright">
        <hr className="horizontal-line" />
        <p>&copy; 2024 DreamNest. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
