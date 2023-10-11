import React from 'react';
import './App.css';
import NavBar from './Navbar';
import GalleryPage from './GalleryPage';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <video autoPlay loop muted className="bg_video">
          <source src="/bg_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <NavBar />
        <div className="text-overlay">
          <h1 className="header-text">ENIGMA ESCAPES</h1>
          <p className="description-text">
            Explore the world's hidden treasures, from exotic landscapes to enigmatic cultures. Our travel narratives unravel the secrets of remarkable destinations, guiding you through extraordinary experiences. Embark on a journey of intrigue, wanderlust, and wonder with us, as we decode the enigmas of travel, one escape at a time.
          </p>
        </div>
        <Routes>
          <Route path="/GalleryPage.js" element={<GalleryPage />} />
        </Routes>
        <Routes>
          <Route path="/Contact.js" element={<Contact />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
