import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import FitPredictor from './components/FitPredictor';
import Login from './components/Login';
import Register from './components/Register';
import sampleProducts from './data/products';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const openLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const openRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const closeModals = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  return (
    <div className="App">
      <header className="header">
        <h1 className="main-title">Men's Fit Predictor</h1>
        <div className="auth-buttons">
          <button className="styled-button" onClick={openLogin}>Login</button>
          <button className="styled-button" onClick={openRegister}>Register</button>
        </div>
      </header>

      <FitPredictor />

      <ProductList products={sampleProducts} />

      {(showLogin || showRegister) && (
        <div className="modal-overlay" onClick={closeModals}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {showLogin && <Login onClose={closeModals} />}
            {showRegister && <Register onClose={closeModals} />}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
