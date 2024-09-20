import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; 
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h4>Sobre nosotros</h4>
          <p>Proveemos las mejores ofertas de productos y servicios directamente a nuestros clientes.</p>
        </div>

        <div className="footer-section">
          <h4>Enlaces útiles</h4>
          <a href="/">Inicio</a><br />
          <a href="/offers">Ofertas</a><br />
          <a href="/contact">Contacto</a>
        </div>

        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <p className="copyright">© 2024 D4HOME. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
