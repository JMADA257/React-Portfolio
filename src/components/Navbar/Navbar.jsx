import React, { useState } from "react";
import "../Navbar/Navbar.css";
import ContactModal from "../Modal/Modal";

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
          <a href="#Home">About me</a>
        </h5>
        <h5>
          <a href="#Projects">Portfolio</a>
        </h5>
        <h5>
          <a onClick={handleShow}>Contact</a>
        </h5>
        <h5>
          <a href="#Resume">Resume</a>
        </h5>
      </div>
      <ContactModal show={showModal} handleClose={handleClose} />
    </nav>
  );
}

export default CustomNavbar;
