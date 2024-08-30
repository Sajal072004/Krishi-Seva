import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Dashboard from './pages/Dashboard/Dashboard';
import Mandi from './pages/Mandi/Mandi';
import ContactUs from './pages/ContactUs/ContactUs';
import ScrollToTop from './components/ScrollToTop';
import Discussion from './pages/Discussion/Discussion';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mandi" element={<Mandi />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/discussions" element={<Discussion />} />
      </Routes>
    </>
  );
};

export default App;
