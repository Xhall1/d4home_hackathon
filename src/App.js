import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import CostosPage from './CostosPage';
import Banner from './components/Banner';
import Footer from './Footer.js';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Banner/>
          <Routes>
            <Route path="/" element={<Offers />} /> 
            <Route path="/details/:city" element={<CostosPage />} />
            <Route path="/costos" element={<CostosPage />} />  
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
