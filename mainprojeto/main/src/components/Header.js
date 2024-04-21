import React from 'react';
import '../App.css';
import logoImage from '../imgs/logos/logoponte.png';

function Header() {
  return (
  
      <header className="header">
        <div className="branding">
        <a href='/'><img src={logoImage} className='logoImg' alt="Logo"/></a> 
        <a href='/'><div className="logo">WhereToGo</div> </a>
        </div>
        
        <nav className="navigation">
          <a href="/places" className="nav-link">Locais</a>
          <a href="/reviews" className="nav-link">Avaliações</a>
          <a href="/roteiro" className="nav-link">Roteiro</a>
          <a href="/wheretoeat" className="nav-link">WhereToEat</a>
        </nav>

        <button className="login-button">Iniciar Sessão</button>
      </header>
  );
  
}

export default Header;