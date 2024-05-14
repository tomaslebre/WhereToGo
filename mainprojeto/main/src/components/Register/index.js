
import React, { useState, useEffect} from 'react';
import './Register.css';

function Register({ isOpen, onClose }) {
    console.log(`isOpen: ${isOpen}`);

    if (!isOpen) return null;


    return (
        <>
            {isOpen && (
                <div className="register-backdrop" onClick={onClose}>
                    <div className="register-container" onClick={e => e.stopPropagation()}>
                        <h1>Junta-te a nós!</h1>

                        <form className="register-form">
                            <label htmlFor="firstName">Primeiro Nome</label>
                            <input type="text" id="firstName" name="firstName" placeholder="Primeiro Nome" required />

                            <label htmlFor="lastName">Último Nome</label>
                            <input type="text" id="lastName" name="lastName" placeholder="Último Nome" required />

                            <label htmlFor="email">Endereço de email</label>
                            <input type="email" id="email" name="email" placeholder="Endereço de email" required />

                            <label htmlFor="password">Palavra-passe</label>
                            <input type="password" id="password" name="password" placeholder="Palavra-passe" required />

                            <label htmlFor="confirmPassword">Confirmar Palavra-passe</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirmar Palavra-passe" required />

                            <button type="submit" className="register-button">Registe-se</button>
                        </form>

                        {/* <div className="login-link">
                            Já tem conta? <a href="#" onClick={(e) => {
                                e.preventDefault();
                                onClose();
                            }}>Inicie Sessão</a>
                        </div> */}
                    </div>
                </div>
            )}
        </>
    );
}

export default Register;
