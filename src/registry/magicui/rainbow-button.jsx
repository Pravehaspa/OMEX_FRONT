import React from 'react';
import './rainbow-button.css';

export const RainbowButton = ({ children, className = '', ...props }) => {
  return (
    <button className={`rainbow-button ${className}`} {...props}>
      {children}
    </button>
  );
};