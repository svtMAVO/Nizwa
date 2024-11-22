import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navebar.css';
function Navebar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <div className="NePg1">
      <div className="navbar-section">
        <div className="video-container">
          <video
            className="NelogoVideo"
            src="/Models/NE_Logo.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>

      <div className="navbar-section middle">
        <h1 className="heading">NIZWA ENGINEERING</h1>
      </div>

      <div className="navbar-section right">
        <Link to="/"><button>Home</button></Link>
        <div
          className="services-dropdown-container"
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        >
          <button>Services</button>
          {dropdownVisible && (
            <div className="dropdown-menu">
              <div className="dropdown-section">
                <h4>Head Office Services</h4>
                <ul>
                  <li><Link to="Head Office Services">Renting & Transpotations</Link></li>
                </ul>
              </div>
              <div className="dropdown-section">
                <h4>Branch Services</h4>
                <ul>
                  <li><Link to="/concrete-products">Supply of Concrete Products (Delivery via Crane)</Link></li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <Link to="/contact-us"><button>Contact Us</button></Link>
        <Link to="/about-us"><button>About Us</button></Link>
      </div>
    </div>
  );
}

export default Navebar;
