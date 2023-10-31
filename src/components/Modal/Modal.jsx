import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../Modal/Modal.css";

function ContactModal({ show, handleClose, children }) {
  return (
    <>
      <div className="modal-content">
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Send me an Email</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <input className="emailField" type="text" placeholder="Email" />
            <input className="nameField" type="text" placeholder="Name" />
            <input className="messageField" type="text" placeholder="Message" /> */}
            {children}
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: "var(--modalGrey)" }}>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {/* <Button variant="primary">Send Email</Button> */}
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default ContactModal;
