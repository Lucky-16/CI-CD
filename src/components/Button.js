import React from 'react';
import './Button.css';

function Button({ onClick, text }) {
  return (
    <button id="clickMe" onClick={onClick} className="custom-button">
      {text}
    </button>
  );
}

export default Button;
