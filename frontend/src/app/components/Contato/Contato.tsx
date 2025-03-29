"use client";

import React from 'react';

const Contato: React.FC = () => {
  return (
    <div>
      <h2>Formulário de Contato</h2>
      <form>
        <label>
          Nome:
          <input type="text" name="nome" />
        </label>
        <label>
          E-mail:
          <input type="email" name="email" />
        </label>
        <label>
          Mensagem:
          <textarea name="mensagem"></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contato;