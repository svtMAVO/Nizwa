import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css'; // Import the CSS file for styling
import tipperTrailerIcon from '../../image/tipper_trailer_icon.webp';
import lowbedTrailerIcon from '../../image/lowbed_trailer_icon.webp';
import cementBulkerIcon from '../../image/cement_bulker_icon.webp';
import './Services.css';


function Services() {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Core Services</h1>
      <p className="services-description">
        Delivering high-quality industrial services to support Oman’s growing infrastructure.
      </p>

      <div className="services-grid">
        {/* Service 1 */}
        <Link to="/services/equipment-transportation" className="service-card">
          <img src={tipperTrailerIcon} alt="3-Axle Tipper Trailer" className="service-icon" />
          <h3 className="service-title">Transportation</h3>
          <p className="service-description">Our fleet includes 3-axle tipper trailers, lowbed trailers, and more for safe, reliable logistics.</p>
        </Link>

        {/* Service 2 */}
        <Link to="/services/crusher-rentals" className="service-card">
          <img src={lowbedTrailerIcon} alt="Lowbed Trailer" className="service-icon" />
          <h3 className="service-title">Mobile and Stationary Crusher Rentals</h3>
          <p className="service-description">Offering crushers for on-site material processing, enhancing efficiency and productivity.</p>
        </Link>
        {/* Service 4 */}
        <Link to="/services/cement-bulker" className="service-card">
          <img src={cementBulkerIcon} alt="Cement Bulker" className="service-icon" />
          <h3 className="service-title">Cement Bulker Logistics</h3>
          <p className="service-description">Specialized cement bulkers to ensure safe and timely delivery for construction projects.</p>
        </Link>
      </div>
    </div>
  );
}

export default Services;
