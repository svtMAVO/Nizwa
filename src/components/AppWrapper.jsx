import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './navebar';
import Home from './pages/Home';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Footer from './Footer';
import BlockDelivery from '../components/pages/BlockDelivery'
import CrusherRentals from './pages/CrusherRentals';
import EquipmentTransportation from './pages/EquipmentTransportation';
import CementBulker from './pages/CementBulker';
import '../App.css';
function AppWrapper() {
  return (

     <div>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/concrete-products" element={<BlockDelivery />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />

        {/* Service Detail Routes */}
        <Route path="Head Office Services" element={<Services/>} />
        <Route path="/services/crusher-rentals" element={<CrusherRentals/>} />
        <Route path="/services/cement-bulker" element={<CementBulker/>} />
        <Route path="/services/equipment-transportation" element={<EquipmentTransportation/>} />
      </Routes>
      <Footer/>
      </div>
      
  );
}

export default AppWrapper;
