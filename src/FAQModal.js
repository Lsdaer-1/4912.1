import React from 'react';
import Modal from 'react-modal';
import './FAQModal.css';

Modal.setAppElement('#root');

const FAQModal = ({ isOpen, onRequestClose }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="FAQ Modal"
    className="ReactModal2__Content"
    overlayClassName="ReactModal2__Overlay"
  >
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-content">
        <div>
          <h3>How do I register and log in?</h3>
          <p>To register, click on the 'Sign In' button on the homepage and fill in the required information. To log in, click on the 'Sign In' button and enter your credentials.</p>
        </div>
        <div>
          <h3>How do I recover my password?</h3>
          <p>Click on the 'Forgot Password' link on the login page and follow the instructions to reset your password.</p>
        </div>
        <div>
          <h3>How do I create and manage events?</h3>
          <p>To create an event, go to the 'Create' section, fill in the event details, and submit. To manage your events, navigate to the 'My Activities' section.</p>
        </div>
        <div>
          <h3>What should I do if I encounter payment issues?</h3>
          <p>If you experience any issues with payments, please contact our support team through the 'Contact Us' section for assistance.</p>
        </div>
      </div>
      <button onClick={onRequestClose}>Close</button>
    </div>
  </Modal>
);

export default FAQModal;

