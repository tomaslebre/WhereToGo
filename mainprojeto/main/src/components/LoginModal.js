import React from 'react';
import '../App.css';
import emailLogo from '../imgs/logos/mail.png';
import googleLogo from '../imgs/logos/google.png';
import ponteLogo from '../imgs/logos/logoponte.png';
 // Make sure to create this CSS file

function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null; // Only render if isOpen is true

  return (
    <div className="login-modal-backdrop" onClick={onClose}>
        
      <div className="login-modal-content" onClick={e => e.stopPropagation()}>
        <img src={ponteLogo} alt="Ponte" className="ponte-logo" />
        <h2>Entre e explore o melhor com Where to go.</h2>
        <button className="login-modal-button" >
            <img src={googleLogo} alt="Google" className="google-logo" />
            <span>Continue with Google</span>
        </button>

        <button className="login-modal-button">
            <img src={emailLogo} alt="Email" className="email-logo" />
            <span>Continue with Email</span> {/* This span will help in aligning the text */}
        </button>
        <p>By proceeding, you agree to our Terms of Use and confirm you have read our Privacy and Cookie Statement</p>
        <button onClick={onClose} className="login-modal-close-button">Close</button>
      </div>
    </div>
  );
}

export default LoginModal;
