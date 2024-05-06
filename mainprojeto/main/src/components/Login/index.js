import React from 'react';
import './Login.css';// Ensure CSS is imported
import closeIcon from '../../imgs/logos/close.png';

function Login({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="login-backdrop" onClick={onClose}>
      <div className="login-container" onClick={e => e.stopPropagation()}>
        <div className="login-logo">
          {/* Optional logo image */}
          <h1>Your Logo Here</h1>
        </div>
        <h2>Pronto para mais uma aventura?</h2>
        <form className="login-form">
          <label htmlFor="email">Endereço de email</label>
          <input type="email" id="email" name="email" placeholder="Email" required />

          <label htmlFor="password">Palavra-passe</label>
          <input type="password" id="password" name="password" placeholder="Palavra-passe" required />

          <div className="login-links">
            <a href="#">Esqueceu-se da Palavra-passe?</a>
            <a href="#">Não tem conta? Registe-se</a>
          </div>

          <button type="submit">Iniciar Sessão</button>
        </form>
        <button onClick={onClose} className="login-close-button">
                <img src={closeIcon} alt="Close" />
               </button>
        <p>By proceeding, you agree to our Terms of Use and confirm you have read our Privacy and Cookie Statement</p>
        <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
      </div>
    </div>
  );
}

export default Login;
