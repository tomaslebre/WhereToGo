import React from 'react';
import './App.css'; // Make sure to create a corresponding CSS file

function Header() {
  return (
    <header className="header">
          <div className="logo">WhereToGo</div>
        <nav className="navigation">
          <a href="/places" className="nav-link">Places</a>
          <a href="/reviews" className="nav-link">Reviews</a>
          <a href="/itinerary" className="nav-link">Roteiro</a>
          <a href="/wheretoeat" className="nav-link">WhereToEat</a>
        </nav>
      <button className="login-button">Iniciar Sessão</button>
    </header>
  );
}

export default Header;
