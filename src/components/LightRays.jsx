import React from 'react';
import '../styles/LightRays.css';

const LightRays = ({ className = '' }) => {
  return (
    <div className={`light-rays ${className}`}>
      <div className="ray ray-1"></div>
      <div className="ray ray-2"></div>
      <div className="ray ray-3"></div>
      <div className="ray ray-4"></div>
      <div className="ray ray-5"></div>
      <div className="ray ray-6"></div>
      <div className="ray ray-7"></div>
      <div className="ray ray-8"></div>
      <div className="ray ray-9"></div>
      <div className="ray ray-10"></div>
      <div className="ray ray-11"></div>
      <div className="ray ray-12"></div>
    </div>
  );
};

export default LightRays;