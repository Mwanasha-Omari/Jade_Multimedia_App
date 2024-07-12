import React, { useState } from 'react';
import './index.css';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='navs'>
      <div className='logo_navbar'>
      
        <div className='navbar'>
        <li>Home</li>
        <li>Blog</li>
        <li>Portfolio</li>
        <li>Podcast</li>
        <li>Products</li>
        <li>Videos</li>
        </div>
         <div className='hamburger' onClick={toggleMenu}>
         <div className='bar'></div>
         <div className='bar'></div>
         <div className='bar'></div>
        </div> 
      </div>

      {showMenu && (
        <div className='menu'>
          <li>Home</li>
          <li>Blog</li>
          <li>Portfolio</li>
          <li>Podcast</li>
          <li>Products</li>
          <li>Videos</li>
        </div>
      )}
    </div>
  );
};

export default Navbar;

