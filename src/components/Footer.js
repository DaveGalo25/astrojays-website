import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bar">
        <Link to="https://engineering.jhu.edu" className="footer-seal-link">
          <img src="/whiting.logo_.small_.vertical.white_-768x543.png" alt="Hopkins Seal" className="footer-seal left" />
        </Link>
        <div className="footer-social-links">
          <a href="https://www.instagram.com/hopkinsrocketry/" className="footer-social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <img src="/instagram-new.png" alt="Instagram" className="footer-social-img" />
          </a>
          <a href="https://youtube.com/@astrojaysrocketry6641?si=E2mTf9grwsslTpaj" className="footer-social-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
            <img src="/youtube-play.png" alt="YouTube" className="footer-social-img" />
          </a>
          <a href="mailto:hopkinsrocketry@gmail.com" className="footer-social-link" aria-label="Email">
            <img src="/email-envelope-line-white-icon.webp" alt="Email" className="footer-social-img" />
          </a>
        </div>
        <img src="/images-2-removebg-preview.png" alt="Hopkins Seal" className="footer-seal right" />
      </div>
    </footer>
  );
};

export default Footer; 