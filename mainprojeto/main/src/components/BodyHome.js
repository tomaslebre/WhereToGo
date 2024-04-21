import React from 'react'
import "../styles/BodyHome.css";
import bridgeImage from '../imgs/imagens/ponte_azul.png';

function BodyHome() {
  return (
    <div className="feature-card">
      <div className="text-container">
        <h2 className='logo-txt'>Where To Go?</h2>
        <p className="slogan-p">Cria o teu roteiro em minutos!</p>
        <button className="new-roteiro">
          <span style={{ position: 'relative', zIndex: 1 }}>Novo Roteiro</span>
        </button>


      </div>
      <img src={bridgeImage} alt="Ponte" className="feature-image" />
    </div>
  )
}

export default BodyHome;
