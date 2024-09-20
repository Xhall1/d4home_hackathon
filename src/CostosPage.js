import React from 'react';
import PriceChart from './PriceChart';
import './CostosPage.css';

const CostosPage = () => {
  const offers = [
    { city: 'Popayán', price: '210.000.000', description: 'Descripción de la oferta en Popayán' },
    { city: 'Popayán', price: '210.000.000', description: 'Descripción de la oferta en Popayán' },
  ];

  return (
    <div className="costos-container">

      <section className="offers">
        <div className="costos-popayan"><h2>COSTOS</h2>
        <h3>Popayán</h3>
        </div>
        <div className="offers-list">
          {offers.map((offer, index) => (
            <div className="offer-card" key={index}>
              <img src="/imagenes/popayan.jpg" alt={offer.city} />
              <h3>{offer.city}</h3>
              <p>Desde {offer.price}</p>
              <p>{offer.description}</p>
              <button>Ver</button>
            </div>
          ))}
        </div>
      </section>

      <section className="prices-section">
        <h3>Rango precios</h3>
        <PriceChart />
      </section>
    </div>
  );
}

export default CostosPage;
