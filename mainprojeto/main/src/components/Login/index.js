import React from 'react';
import './Login.css';
import closeIcon from '../../imgs/logos/close.png';
import ponteLogo from '../../imgs/logos/logoponte.png';

function Login({ isOpen, onClose, onRegisterOpen }) {
    const handleChangeToRegisterClick = () => {
        onRegisterOpen(); // Abre o modal de registro
    };

    if (!isOpen) return null;
    return (
        <div className="login-backdrop" onClick={onClose}>
            <div className="login-container" onClick={e => e.stopPropagation()}>
                <div className="login-header">
                    <img src={ponteLogo} alt="Ponte" className="ponte-logo" />
                    <h3><b>Pronto para mais uma aventura?</b></h3>
                </div>

                <form className="login-form">
                    <label htmlFor="email">Endereço de email</label>
                    <input type="email" id="email" name="email" placeholder="Email" required />

                    <label htmlFor="password">Palavra-passe</label>
                    <input type="password" id="password" name="password" placeholder="Palavra-passe" required />
                    <div className="login-nopass">
                        <a href="#">Esqueceu-se da Palavra-passe?</a>
                    </div>

                    <button type="submit">Iniciar Sessão</button>
                </form>

                <div className="login-register">
                    <p className="account-query">Não tem conta?</p>
                    <button onClick={handleChangeToRegisterClick}>
                        Registe-se
                    </button>
                </div>

                <button onClick={onClose} className="login-close-button">
                    <img src={closeIcon} alt="Close" />
                </button>
                <div className="login-terms">
                    <p>By proceeding, you agree to our Terms of Use and confirm you have read our Privacy and Cookie Statement</p>
                    <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                </div>
            </div>
        </div>
    );
}

export default Login;
