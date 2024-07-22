// src/WelcomeModal.js
import React from 'react';
import Modal from 'react-modal';
import './WelcomeModal.css';

Modal.setAppElement('#root');

const WelcomeModal = ({ isOpen, onRequestClose }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Welcome Modal"
    className="ReactModal3__Content"
    overlayClassName="ReactModal3__Overlay"
  >
    <div>
      <h2>Welcome to ConnectCanada</h2>
      <p>We are delighted to have you here. This website is designed to help international students in Canada connect with each other, find useful resources, and explore various activities and events happening around. Feel free to browse through the different sections and join our community!</p>
      <button onClick={onRequestClose}>Close</button>
    </div>
  </Modal>
);

export default WelcomeModal;
