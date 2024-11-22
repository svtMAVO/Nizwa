import React from 'react';
import './ContactUs.css';

function ContactUs() {
  const emailSubject = "Inquiry about Nizwa Engineering Services";
  const emailBody = "Hello, I am interested in learning more about your services. Please provide more details.";
  const whatsappMessage = "Hello, I would like to inquire about your services. Could you please provide more details?";

  return (
    <div className="contact-us">
      <h2 className="contact-heading">Contact Us</h2>
      <p className="contact-description">
        Connect with the right department to address your needs. Our team is committed to providing prompt and professional assistance.
      </p>

      {/* Sales Contact Card */}
      <div className="contact-card">
        <h3 className="contact-card-title">Sales Department</h3>
        <p className="contact-card-description">
          For inquiries related to transportation, crusher rentals, and block delivery services:
        </p>
        <div className="contact-detail">
          <i className="fas fa-envelope contact-icon"></i>
          <span>Email:</span>
          <a
            href={`mailto:sales@nizwaeng.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}
            className="email-link"
          >
            sales@nizwaeng.com
          </a>
          <span className="contact-action">(Send Email)</span>
        </div>
        <div className="contact-detail">
          <i className="fab fa-whatsapp contact-icon"></i>
          <span>Phone:</span>
          <a
            href={`https://wa.me/96892681010?text=${encodeURIComponent(whatsappMessage)}`}
            className="whatsapp-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            +968 9268 1010
          </a>
          <span className="contact-action">(WhatsApp)</span>
        </div>
      </div>

      {/* Purchasing Contact Card */}
      <div className="contact-card">
        <h3 className="contact-card-title">Purchasing Department</h3>
        <p className="contact-card-description">
          For supplier inquiries, partnerships, and procurement of goods and services:
        </p>
        <div className="contact-detail">
          <i className="fas fa-envelope contact-icon"></i>
          <span>Email:</span>
          <a
            href={`mailto:purchase@nizwaeng.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}
            className="email-link"
          >
            purchase@nizwaeng.com
          </a>
          <span className="contact-action">(Send Email)</span>
        </div>
        <div className="contact-detail">
          <i className="fab fa-whatsapp contact-icon"></i>
          <span>Phone:</span>
          <a
            href={`https://wa.me/96892844415?text=${encodeURIComponent(whatsappMessage)}`}
            className="whatsapp-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            +968 9284 4415
          </a>
          <span className="contact-action">(WhatsApp)</span>
        </div>
      </div>

      {/* Quality Control Contact Card */}
      <div className="contact-card">
        <h3 className="contact-card-title">Quality Control</h3>
        <p className="contact-card-description">
          For feedback and quality assurance-related concerns:
        </p>
        <div className="contact-detail">
          <i className="fas fa-envelope contact-icon"></i>
          <span>Email:</span>
          <a
            href={`mailto:qc@nizwaeng.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}
            className="email-link"
          >
            qc@nizwaeng.com
          </a>
          <span className="contact-action">(Send Email)</span>
        </div>
        <div className="contact-detail">
          <i className="fab fa-whatsapp contact-icon"></i>
          <span>Phone:</span>
          <a
            href={`https://wa.me/96896108883?text=${encodeURIComponent(whatsappMessage)}`}
            className="whatsapp-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            +968 96108883
          </a>
          <span className="contact-action">(WhatsApp)</span>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
