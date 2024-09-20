import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Banner = () => {
  return (
        <nav className="navbar">
          <div className="logo">
            <img src="/imagenes/Logo.png" alt="D4Home" />
          </div>
          <div className="menu">
          <Link to="/">Inicio</Link>
          <Link to="/costos">Costos</Link>
          </div>
        </nav>
  );
}


export default Banner;

