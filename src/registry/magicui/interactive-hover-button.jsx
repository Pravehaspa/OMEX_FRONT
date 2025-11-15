import React from 'react';
import './interactive-hover-button.css';

export const InteractiveHoverButton = ({ children, className = '', ...props }) => {
  return (
    <button className={`interactive-hover-button ${className}`} {...props}>
      {children}
    </button>
  );
};