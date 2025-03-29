"use client";

import React from 'react';

const Receitas: React.FC = () => {
  return (
    <div>
      <h2>Receitas Saudáveis</h2>
      <div>
        <div>
          <img src="path/to/image.jpg" alt="Receita" />
          <h3>Título da Receita</h3>
          <button>Veja a Receita Completa</button>
        </div>
        {/* Adicione mais receitas conforme necessário */}
      </div>
    </div>
  );
};

export default Receitas;