import React from 'react';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css'; 

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <div className="contact-item">
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <p>Email: example@example.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
