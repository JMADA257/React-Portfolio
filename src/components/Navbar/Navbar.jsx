import React, { useState } from "react";
import "../Navbar/Navbar.css";
import ContactModal from "../Modal/Modal";
import { Link } from "react-router-dom";
import pdf from "../../assets/Resume.pdf";

function CustomNavbar() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <nav className="navbar">
      <div className="left">
        <h1>Jordan Adams</h1>
      </div>
      <div className="right">
        <h5>
          <Link
            to="/about"
            className="nav-link"
            onClick={() => setExpanded(false)}
          >
            About me{" "}
          </Link>
        </h5>
        <h5>
          <Link
            to="/projects"
            className="nav-link"
            onClick={() => setExpanded(false)}
          >
            Portfolio{" "}
          </Link>
        </h5>
        <h5>
          <a onClick={handleShow}>Contact</a>
        </h5>
        <h5>
          <a href={pdf} target="_blank">
            Resume
          </a>
        </h5>
      </div>
      <ContactModal show={showModal} handleClose={handleClose} />
    </nav>
  );
}

export default CustomNavbar;
