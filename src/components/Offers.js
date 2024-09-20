import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Offers.css';

const offers = [
  { city: 'Popayán', price: '210.000.000', description: 'Descripción' },
  { city: 'Popayán', price: '210.000.000', description: 'Descripción' },
  { city: 'Popayán', price: '210.000.000', description: 'Descripción' },
];

const Offers = () => {
  const navigate = useNavigate();

  const handleViewDetails = (city) => {
    navigate(`/details/${city}`);  
  };

  return (
    <section className="offers">
      <h2>Mira los apartamentos más baratos</h2>
      <div className="offers-list">
        {offers.map((offer, index) => (
          <div className="offer-card" key={index}>
            <img src="/imagenes/pasto.jpg" alt={offer.city} />
            <h3>{offer.city}</h3>
            <p>Desde {offer.price}</p>
            <p>{offer.description}</p>
            <button onClick={() => handleViewDetails(offer.city)}>Ver</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Offers;
