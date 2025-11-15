import React from 'react';
import './shimmer-button.css';

export const ShimmerButton = ({ children, className = '', ...props }) => {
  return (
    <button className={`shimmer-button ${className}`} {...props}>
      {children}
    </button>
  );
};