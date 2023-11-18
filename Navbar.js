import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import logo from './images/1687258610spacex-logo-png-removebg-preview.png'
import './Navbar.css'; // Create a separate CSS file for styling

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
  
      <div className={`logo-container ${showMenu ? 'hide' : ''}`}>
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className={`menu-container ${showMenu ? 'show' : ''}`}>
        <div className="close-menu" onClick={toggleMenu}>
          <IoMdClose />
        </div>
        <ul className="menu">
          <li>mobiles skin</li>
          <li>laptop skins</li>
          <li>collactions</li>
          <li>Contact layers</li>
          <li>costumers</li>
          <li>support 24/7</li>
          <li>about us</li>
        </ul>
      </div>
      <div className="icons-container">
  <div className="mobile-icon">
    
    <span>Mobile skins</span>
  </div>

  <div className="laptop-icon">
   
    <span>Laptop skins</span>
  </div>

  <div className="collections-icon">
   
    <span>Collections</span>
  </div>

  <div className="skins-icon">
    
    <span>all Skins</span>
  </div>

  <div className="covers-icon">
  
    <span> all Covers</span>
  </div>

  <div className="skins-icon">
 
    <span> new Skins</span>
  </div>

</div>
      <div className="menu-icon" onClick={toggleMenu}>
        <AiOutlineMenu />
      </div>
    </nav>
  );
};

export default Navbar;