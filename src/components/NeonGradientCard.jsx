import React from 'react';
import '../styles/NeonGradientCard.css';

const NeonGradientCard = ({ children, className = '' }) => {
  return (
    <div className={`neon-gradient-card ${className}`}>
      <div className="neon-gradient-card-content">
        {children}
      </div>
    </div>
  );
};

export default NeonGradientCard;