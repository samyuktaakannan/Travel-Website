import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul className="nav-list">
        <li><a href="#home">HOME</a></li>
        <li><a href="/GalleryPage.js">GALLERY</a></li>
        <li><a href="/Contact.js">CONTACT</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
