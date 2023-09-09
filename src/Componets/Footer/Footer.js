import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-content">
      <h3>Categories</h3>
      <span>Men</span>
      <span>Women</span>
      <span>Children</span>
      <span>Accessories</span>
      <span>New Arrivals</span>
    </div>

      <div className="footer-content">
      <h3>Links</h3>
      <span>Men</span>
      <span>Women</span>
      <span>Children</span>
      <span>Accessories</span>
      <span>Arrivals</span>

      </div>
      <div className="footer-content">
      <h3>About</h3>
        <span>Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. It features scrambled Latin text, which emphasizes the design over content of the layout. It is the standard</span>
      </div>
      <div className="footer-content">
      <h3>Contact</h3>
      <span>Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. It features scrambled Latin text, which emphasizes the design over content of the layout. It is the standard</span>
      
      </div>
    </div>
  );
};

export default Footer;
