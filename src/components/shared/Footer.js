import React    from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <nav>
          <ul className="nav justify-content-center foot">
            <li className="nav-item">
              <a className="nav-link white" href="#" target="_blank" rel="noopener noreferrer">Item 1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" target="_blank" rel="noopener noreferrer">Item 2</a>
            </li>
          </ul>
        </nav>
        <p className="white text-center font-weight-light">Copyright 2018</p>
      </div>
    </footer>
  );
}

export default Footer;