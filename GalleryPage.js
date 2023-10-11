import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './GalleryPage.css'; 

function GalleryPage() {
    return (
      <div className="gallery-container">
        <div className="horizontal-images">
          <div className="image-item">
            <img src="/snow.jpg" alt="Image 1" />
          </div>
          <div className="image-item">
            <img src="/eiffel_tower.jpg" alt="Image 2" />
          </div>
          <div className="image-item">
            <img src="/times_square.jpg" alt="Image 3" />
          </div>
          <div className="image-item">
            <img src="/dubai.jpg" alt="Image 4" />
          </div>
        </div>
      </div>
    );
  }
  

export default GalleryPage;
