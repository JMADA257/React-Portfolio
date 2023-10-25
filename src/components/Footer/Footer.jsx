import React from "react";
import linkedIn from "../../assets/linkedin.png";
import github from "../../assets/github-white.png";
import email from "../../assets/envelope.png";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <a
        href="https://www.linkedin.com/in/jordan-adams-a14602288/"
        target="noBlank"
      >
        <img className="footer-image" src={linkedIn} alt="" />
      </a>
      <a href="https://github.com/JMADA257" target="noBlank">
        <img className="footer-image" src={github} alt="" />
      </a>
      <a href="#" target="noBlank">
        <img className="footer-image" src={email} alt="" />
      </a>
    </footer>
  );
}

export default Footer;
