import React from 'react';
import '../App.css';
import emailLogo from '../imgs/logos/mail.png';
import googleLogo from '../imgs/logos/google.png';
import ponteLogo from '../imgs/logos/logoponte.png';
import closeIcon from '../imgs/logos/close.png';
 // Make sure to create this CSS file

function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null; // Only render if isOpen is true

  return (
    <div className="login-modal-backdrop" onClick={onClose}>
        
      <div className="login-modal-content" onClick={e => e.stopPropagation()}>
        <div className="login-modal-header">
          <img src={ponteLogo} alt="Ponte" className="ponte-logo" />
          <h2>Entre e explore o melhor com <b>WhereToGo</b></h2>
        </div>
        <button className="login-modal-button" >
            <img src={googleLogo} alt="Google" className="google-logo" />
            <span>Continue with Google</span>
        </button>

        <button className="login-modal-button">
            <img src={emailLogo} alt="Email" className="email-logo" />
            <span>Continue with Email</span> {/* This span will help in aligning the text */}
        </button>
        <p className="terms-modal">By proceeding, you agree to our Terms of Use and confirm you have read our Privacy and Cookie Statement</p>
        <button onClick={onClose} className="login-modal-close-button">
            <img src={closeIcon} alt="Close" />
        </button>
      </div>
    </div>
  );
}

export default LoginModal;
