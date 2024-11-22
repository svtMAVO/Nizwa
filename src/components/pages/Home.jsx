import React from 'react';
import coverPhoto from '../../image/Facory1.png';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Cover Photo */}
      <div
        className="cover-photo"
        style={{ backgroundImage: `url(${coverPhoto})` }}
      >
        <h1 className="cover-title">Welcome to Nizwa Engineering</h1>
      </div>

      {/* Welcome Message */}
      <h2 className="welcome-message">Driving Oman’s Industrial Future Since 1981</h2>

      {/* Our Services Section - Head Office */}
      <div className="services-section">
        <h3>HEAD OFFICE SERVICES</h3>
        <ul className="services-list">
          <li><strong>Specialized Equipment Transportation</strong></li>
          <li><strong>Mobile and Stationary Crusher Rentals</strong></li>
          <li><strong>Cement Bulker Logistics</strong></li>
        </ul>
      </div>

      {/* Al Rumeli Cement Products Section */}
      <div className="alrumeli-section">
        <h3>BRANCH SERVICES - Al Rumeli Cement Products</h3>
        <p>
          Dedicated to producing and supplying high-quality concrete products for Oman’s construction needs.
        </p>
        <ul className="services-list">
          <li><strong>Supply of Concrete Products (Delivery via Crane)</strong></li>
        </ul>
        <div className="video-box">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/8sXpvE0Edqs?start=1"
            title="Al Rumeli Cement Products Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Home;
