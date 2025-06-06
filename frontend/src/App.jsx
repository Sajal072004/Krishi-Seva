import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Dashboard from './pages/Dashboard/Dashboard';
import Mandi from './pages/Mandi/Mandi';
import ContactUs from './pages/ContactUs/ContactUs';
import ScrollToTop from './components/ScrollToTop';
import Discussion from './pages/Discussion/Discussion';
import NewThread from './pages/Discussion/components/NewThread';
import ThreadDetail from './pages/Discussion/components/ThreadDetail';
import Educational from './pages/Educational/Educational';
import News from './pages/News/News';
import NewsDetail from './pages/News/components/NewsDetail';
import AboutUs from './pages/AboutUs/AboutUs';
import Settings from './pages/Settings/Settings';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mandi" element={<Mandi />} />
        <Route path="/educational" element={<Educational />} />
        <Route path="/latest-news" element={<News />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/discussions" element={<Discussion />} />
        <Route path="/discussions/new-thread" element={<NewThread />} />
        <Route path="/discussions/:id" element={<ThreadDetail />} />
        <Route path="/latest-news/:id" element={<NewsDetail />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
};

export default App;
