import React, { useState } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import './BlockDelivery.css';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const defaultCenter = { lat: 22.9333, lng: 57.5333 }; // Nizwa, Oman

function BlockDelivery() {
  const [selectedBlockId, setSelectedBlockId] = useState(null);
  const [orderItems, setOrderItems] = useState([{ blockType: '', quantity: '' }]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showMapPopup, setShowMapPopup] = useState(false);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBOinZQxFkBmDcmB5s_0A8gONDN4pEMbas', // Replace with your actual API key
  });

  const blockDetails = [
    { id: 1, name: '8 Inch Hollow Block', dimensions: '190mm x 190mm x 390mm', weight: '20.100 kg', bundleSize: '75 pcs', videoPath: '/Models/8H.mp4' },
    { id: 2, name: '8 Inch Solid Block', dimensions: '190mm x 190mm x 390mm', weight: '27.700 kg', bundleSize: '75 pcs', videoPath: '/Models/8S.mp4' },
    { id: 3, name: '6 Inch Hollow Block', dimensions: '140mm x 190mm x 390mm', weight: '16.500kg', bundleSize: '90 pcs', videoPath: '/Models/6H.mp4' },
    { id: 4, name: '6 Inch Solid Block', dimensions: '140mm x 190mm x 390mm', weight: '21.300 kg', bundleSize: '90 pcs', videoPath: '/Models/6S.mp4' },
    { id: 5, name: '4 Inch Solid Block', dimensions: '90mm x 190mm x 390mm', weight: '13.800 kg', bundleSize: '150 pcs', videoPath: '/Models/4S.mp4' },
  ];

  const handleShowDetails = (blockId) => {
    setSelectedBlockId(selectedBlockId === blockId ? null : blockId);
  };

  const handleAddOrderItem = () => {
    setOrderItems([...orderItems, { blockType: '', quantity: '' }]);
  };

  const handleOrderItemChange = (index, field, value) => {
    const newOrderItems = [...orderItems];
    newOrderItems[index][field] = value;
    setOrderItems(newOrderItems);
  };

  const handleMapClick = (event) => {
    const { lat, lng } = event.latLng.toJSON();
    setSelectedLocation({ lat, lng });
  };

  const handleConfirmLocation = () => {
    setShowMapPopup(false);
  };

  return (
    <div className="block-delivery-container">
      <h1>Sale of Concrete Products</h1>
      <p>Explore our high-quality concrete blocks and submit an inquiry to receive a quote.</p>

      <div className="content-container">
        {/* Left: Block Details */}
        <div className="block-details-section">
          <div className="block-grid">
            {blockDetails.map((block) => (
              <div key={block.id} className="block-item">
                <div className="video-container">
                  <video
                    src={block.videoPath}
                    className="block-video"
                    muted
                    onClick={(e) => e.target.play()}
                  />
                </div>
                <button
                  onClick={() => handleShowDetails(block.id)}
                  className="show-details-button"
                >
                  {selectedBlockId === block.id ? 'Hide Details' : 'Show Details'}
                </button>
                {selectedBlockId === block.id && (
                  <div className="details-popup">
                    <h4>{block.name}</h4>
                    <p>Dimensions: {block.dimensions}</p>
                    <p>Weight: {block.weight}</p>
                    <p>Bundle Size: {block.bundleSize}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Quote Request Form */}
        <div className="quote-form-container">
          <h3>Get a Quote</h3>
          {orderItems.map((item, index) => (
            <div key={index} className="order-item">
              <select
                value={item.blockType}
                onChange={(e) => handleOrderItemChange(index, 'blockType', e.target.value)}
                required
              >
                <option value="" disabled>Select block type</option>
                {blockDetails.map((block) => (
                  <option key={block.id} value={block.name}>
                    {block.name}
                  </option>
                ))}
              </select>
              <input
                  type="number"
                   value={item.quantity}
                   onChange={(e) => handleOrderItemChange(index, 'quantity', e.target.value)}
                   placeholder="Enter quantity"
                   min="0" /* Ensures the minimum value is 0 */
                   required
                />
            </div>
          ))}

          <button type="button" onClick={handleAddOrderItem}>
            Add Another Block Type
          </button>

          <button
            type="button"
            onClick={() => setShowMapPopup(true)}
            className="select-location-button"
          >
            Select Delivery Location
          </button>

          {selectedLocation && (
            <p>
              Selected Location: Latitude {selectedLocation.lat}, Longitude {selectedLocation.lng}
            </p>
          )}

          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your requirements" rows="4"></textarea>

           {/* WhatsApp Button */}
  <a
    href={`https://wa.me/+96892681010?text=Hello, I would like a quote for the following blocks: ${orderItems
      .map((item) => `${item.blockType} - Quantity: ${item.quantity}`)
      .join(', ')}%0ALocation: ${selectedLocation ? `${selectedLocation.lat}, ${selectedLocation.lng}` : 'Not provided'}`}
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-button"
  >
    <i className="fab fa-whatsapp"></i> Send via WhatsApp
  </a>

  {/* Email Button */}
  <a
    href={`mailto:sales@nizwaeng.com?subject=Quote Request&body=Please send me a quote for the following blocks:%0A${orderItems
      .map((item) => `${item.blockType} - Quantity: ${item.quantity}`)
      .join('%0A')}%0ALocation: ${selectedLocation ? `${selectedLocation.lat}, ${selectedLocation.lng}` : 'Not provided'}`}
    target="_blank"
    rel="noopener noreferrer"
    className="email-button"
  >
    <i className="fas fa-envelope"></i> Send via Email
  </a>
        </div>
      </div>

      {/* Map Popup */}
      {showMapPopup && isLoaded && (
        <div className="map-popup">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={defaultCenter}
            zoom={12}
            onClick={handleMapClick}
          >
            {selectedLocation && <Marker position={selectedLocation} />}
          </GoogleMap>
          <div className="map-buttons">
            <button onClick={handleConfirmLocation} disabled={!selectedLocation}>
              Confirm Location
            </button>
            <button onClick={() => setShowMapPopup(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BlockDelivery;
