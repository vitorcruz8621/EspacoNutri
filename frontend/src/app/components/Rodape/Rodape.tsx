"use client";

import React from 'react';

const Rodape: React.FC = () => {
  return (
    <footer>
      <div>
        <p>© 2025 Nutricionista. Todos os direitos reservados.</p>
        <div>
          <a href="https://facebook.com">Facebook</a>
          <a href="https://instagram.com">Instagram</a>
          <a href="https://twitter.com">Twitter</a>
        </div>
        <div>
          <a href="/termos">Termos de Uso</a>
          <a href="/privacidade">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
};

export default Rodape;