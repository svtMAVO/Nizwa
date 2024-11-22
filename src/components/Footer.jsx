import React from 'react';

function Footer() {

  return (
    <footer style={footerStyle}>
      <div style={footerContainer}>
        {/* Company Address */}
        <div style={section}>
          <h4 style={sectionTitle}>Our Address</h4>
          <p>Post Box No 232, Postal Code: 611</p>
          <p>Nizwa, Oman</p>
        </div>

        {/* Group Company Information */}
        <div style={section}>
          <h4 style={sectionTitle}>Group Companies</h4>
          <p>Nizwa Mining, Wafra Engineering LLC</p>
        </div>

        {/* Google Map */}
        <div style={section}>
          <h4 style={sectionTitle}>Location</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.1882137481816!2d57.67959757220686!3d22.873429876103597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8e56636548f52f%3A0x1b533c342b2015ab!2sAl%20Rumeli%20Cement%20Product!5e1!3m2!1sen!2som!4v1730827356919!5m2!1sen!2som"
            width="300"
            height="85" // Height remains the same
            style={{ border: 0, borderRadius: '2px' }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map Location"
          ></iframe>
        </div>
      </div>
      <div style={footerBottom}>
        <p>Copyright © nizwaeng.com. All rights reserved.</p>
      </div>
    </footer>
  );
}

// CSS Styles for Inline Styling
const footerStyle = {
  backgroundColor: '#1A3C6B',
  color: 'white',
  padding: '5px 0', // Minimal padding
  fontSize: '9px', // Very small font size
};

const footerContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  maxWidth: '600px', // Reduced max width
  margin: '0 auto',
  padding: '2px 0', // Further reduced padding
};

const section = {
  maxWidth: '150px', // Minimal width
  textAlign: 'center',
  margin: '2px', // Very small margin
};

const sectionTitle = {
  fontSize: '10px', // Small title font
  fontWeight: 'bold',
  marginBottom: '2px', // Minimal margin
};

const footerBottom = {
  borderTop: '1px solid #FFFFFF55',
  paddingTop: '3px', // Minimal padding
  textAlign: 'center',
  fontSize: '8px', // Very small footer text
  color: '#d3d3d3',
};

export default Footer;
