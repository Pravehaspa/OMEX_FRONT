import React from 'react';
import '../styles/AuroraText.css';
//  
const AuroraText = ({ children, className = '' }) => {
  return (
    <span className={`aurora-text ${className}`}>
      {children}
    </span>
  );
};

export default AuroraText;