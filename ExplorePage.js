import React from 'react';
import { Link } from 'react-router-dom';  
import './ExplorePage.css';
import GalleryPage from './GalleryPage';
import { Routes, Route } from 'react-router-dom';

function ExplorePage() {
  return (
    <div className="explore-container">
      <div className="horizontal-images-ep">
        <div className="image-item-ep">
          <img src="ep1.jpg" alt="Image 1" />
        </div>
        <div className="image-item-ep">
          <img src="ep2.jpg" alt="Image 1" />
        </div>
        <div className="image-item-ep">
          <img src="ep3.jpg" alt="Image 1" />
        </div>
      </div>
      <div className="page-text">
        <h1>Discover story-worthy <br /> travel moments</h1>
      </div>
      <Routes>
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
      <Link to="/GalleryPage.js" className="btn-ep">
        Gallery Page
      </Link>
    </div>
  );
}

export default ExplorePage;
