"use client";

import React from 'react';
import './Biografia.css';

const Biografia: React.FC = () => {
  return (
    <div className="biografia-container">
      <div className="biografia-content">
        <h2 className="biografia-title">Biografia da Nutricionista</h2>
        {/* 
        <div>
          <p className="text-lg">Formação e especializações...</p>
          <p className="text-lg">Filosofia de trabalho e motivação pessoal...</p>
          <span className="text-sm">Certificações</span>
      </div>
        */}
      </div>
    </div>
  );
};

export default Biografia;