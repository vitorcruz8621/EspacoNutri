"use client";

import React from 'react';

const Biografia: React.FC = () => {
  return (
    <div
      className="bg-[url('/photos/Raphaela_frutas.jpg')] bg-cover bg-center text-white min-h-screen flex items-center justify-center text-center"
    >
      <div className="p-8 bg-black bg-opacity-50 rounded-lg">
        <h2 className="text-4xl font-bold mb-4">Biografia da Nutricionista</h2>
        {/* 
        <div>
          <p className="text-lg">Formação e especializações...</p>
          <p className="text-lg">Filosofia de trabalho e motivação pessoal...</p>
          <span className="text-sm">Certificações</span>
      </div>
        */}
      </div>
    </div >
  );
};

export default Biografia;