import React from 'react';
import './Button.css';

function Button({ onClick, text, type = 'button' }) {
  return (
    <button type={type} onClick={onClick} className="custom-button">
      {text}
    </button>
  );
}

export default Button;
