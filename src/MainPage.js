import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="main-container">
      <header className="header">
        <h1>Bienvenido a D4HOME</h1>
      </header>

      <section className="main-content">
        <h2>Nuestras Ofertas</h2>
        <p>Descubre nuestras increíbles ofertas.</p>
        <Link to="/costos">
          <button className="costos-button">Ver Costos</button>
        </Link>
      </section>
    </div>
  );
};

export default MainPage;
