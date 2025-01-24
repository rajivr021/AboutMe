import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaDribbble } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="profile-image">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="profile-pic"
        />
      </div>
      <h1 className="name">Louie Jie Mahusay</h1>
      <p className="title">Web Developer / Photographer</p>
      <div className="social-icons">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="icon" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="icon" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="icon" />
        </a>
        <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
          <FaDribbble className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
